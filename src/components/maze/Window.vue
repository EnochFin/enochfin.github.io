<template>
    <div ref="win" class="window-comp" data-id="window-component">
        <v-stage :config="stageConfig" class="window-stage">
            <v-layer>
                <Maze v-if="!needUpdate" :width="winWidth" :height="winHeight" :cells="cells"></Maze>
                <Cell v-for="cell in cells" :key="cell.id" v-bind="cell"></Cell>
                <v-text :config="textConfig"></v-text>
            </v-layer>
        </v-stage>
        <ul>
            <li><button @click="handleInit">Init</button></li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { computed, defineComponent, onMounted, onUpdated, reactive, ref } from 'vue';
import Maze from './Maze.vue';
import Cell from './Cell.vue';

const win = ref();

defineComponent(Maze);
const props = defineProps(['width', 'height']);
const winWidth = props.width;
const winHeight = props.height;
const size = 10;
const num = size ** 2;
let needUpdate = ref(false);

let cellsInit = Array(num);

let currId = 0;

const getId = () => currId++;

for (let ind = 0; ind < num; ind++) {
    let yInd = Math.floor(ind / size);
    let xInd = ind % size;
    cellsInit[ind] = { id: getId(), x: xInd, y: yInd, visited: false, walls: 15 };
}
const cells = ref(cellsInit.slice());

const stageConfig = {
    width: winWidth,
    height: winHeight,
};

const textConfig = ref({
    text: 'Hello',
    x: 50,
    y: 300,
});

const handleInit = (e) => {
    const nextTextConfig = textConfig.value;
    nextTextConfig.text = 'initializing!';
    textConfig.value = nextTextConfig;
    breakWalls();
}

const getIndex = (i, j) => i * size + j;
const randomIndex = (arr) => Math.floor(Math.random() * arr.length);

const setVisited = (i, visited) => {
    let modCells = cells.value;
    modCells[i].visited = visited;
    modCells[i].id = modCells[i].id + num;
}

const getNeedVisit = (i, j, visited) => {
    let needVisit = Array();
    // check left
    if (i > 0) {
        const lIndex = getIndex(i - 1, j);
        if (cells.value[lIndex].visited == visited) {
            needVisit.push(cells.value[lIndex]);
        }
    }
    // check right
    if (i < size - 1) {
        const rIndex = getIndex(i + 1, j);
        if (cells.value[rIndex].visited == visited) {
            needVisit.push(cells.value[rIndex]);
        }
    }
    // check top
    if (j > 0) {
        const tIndex = getIndex(i, j - 1);
        if (cells.value[tIndex].visited == visited) {
            needVisit.push(cells.value[tIndex]);
        }
    }
    // check bottom
    if (j < size - 1) {
        const bIndex = getIndex(i, j + 1);
        if (cells.value[bIndex].visited == visited) {
            needVisit.push(cells.value[bIndex]);
        }
    }
    return needVisit
};

const breakWall = (i, j, toI, toJ) => {
    const curr = cells.value[getIndex(i, j)];
    const to = cells.value[getIndex(toI, toJ)];
    // lrtb
    const clearLeft = (v) => v & 14;    // 0111
    const clearRight = (v) => v & 13;   // 1011
    const clearTop = (v) => v & 11;     // 1101
    const clearBottom = (v) => v & 7;   // 1110
    if (toI < i) {
        // left
        curr.walls = clearLeft(curr.walls);
        to.walls = clearRight(to.walls);
    } else if (toI > i) {
        // right
        curr.walls = clearRight(curr.walls);
        to.walls = clearLeft(to.walls);
    } else if (toJ < j) {
        // top
        curr.walls = clearTop(curr.walls);
        to.walls = clearBottom(to.walls);
    } else if (toJ > j) {
        // bottom
        curr.walls = clearBottom(curr.walls);
        to.walls = clearTop(to.walls);
    }
    cells.value[getIndex(i, j)] = curr;
    cells.value[getIndex(toI, toJ)] = to;
}

const breakEntranceAndExit = () => {
    cells.value[0].walls = 0;
    cells.value[cells.value.length - 1].walls = 0;
}

const resetCellsVisited = () => {
    for (let index = 0; index < cells.value.length; index++) {
        setVisited(index, false);
    }
}

const breakWalls = () => {
    breakWallsR(0, 0)
    breakEntranceAndExit();
    resetCellsVisited();
    needUpdate.value = true;
    needUpdate.value = false;
    const temp = cells.value.slice();
    cells.value = temp;
    const nextTextConfig = textConfig.value;
    nextTextConfig.text = 'done!';
    textConfig.value = nextTextConfig;
    console.log(cells.value);
};

const breakWallsR = (i, j) => {
    setVisited(getIndex(i, j), true);
    while (true) {
        let needVisit = getNeedVisit(i, j, false);
        if (needVisit.length == 0) {
            return;
        }
        const randInd = randomIndex(needVisit);
        const dir = needVisit[randInd];
        needVisit.splice(randInd, 1);
        const toI = dir.y;
        const toJ = dir.x;
        breakWall(i, j, toI, toJ);
        breakWallsR(toI, toJ);
    }
};
</script>

<style scoped>
.window-comp {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
}

.window-stage {
    width: 100%;
    height: 100%;
}
</style>
  