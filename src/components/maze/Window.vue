<template>
    <div ref="win" class="window-comp" data-id="window-component">
        <v-stage :config="stageConfig" class="window-stage">
            <v-layer>
                <Maze :width="winWidth" :height="winHeight" :cells="cells"></Maze>
                <Cell v-for="cell in cells" :key="cell.id" v-bind="cell"></Cell>
                <v-text :config="textConfig"></v-text>
            </v-layer>
        </v-stage>
        <ul>
            <li><button @click="handleInit">Break Walls</button></li>
            <li><button @click="breakEntranceAndExit">Break Entrance and Exit</button></li>
            <li><button @click="resetCellsVisited">Reset Cells Visited</button></li>
            <li><button @click="setupCells">Reset Cells</button></li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { computed, defineComponent, onMounted, onUpdated, reactive, ref } from 'vue';
import Maze from './Maze.vue';
import Cell from './Cell.vue';

const win = ref();

const props = defineProps(['width', 'height']);
const winWidth = props.width;
const winHeight = props.height;
const size = 10;
const num = size ** 2;


let currId = 0;

const getId = () => currId++;

const cellLeft = (v: number) => v & 14;    // 0111
const cellRight = (v: number) => v & 13;   // 1011
const cellTop = (v: number) => v & 11;     // 1101
const cellBottom = (v: number) => v & 7;   // 1110

const cells = ref([]);

const setupCells = () => {
    let cellsInit = Array(num);
    for (let ind = 0; ind < num; ind++) {
        let yInd = Math.floor(ind / size);
        let xInd = ind % size;
        cellsInit[ind] = { id: ind, x: xInd, y: yInd, visited: false, walls: 15, lineX: 0, lineY: 0 };
    }
    cells.value = cellsInit.slice();
}

const stageConfig = {
    width: winWidth,
    height: winHeight,
};

const textConfig = ref({
    text: 'Hello',
    x: 50,
    y: 300,
});

const handleInit = () => {
    const nextTextConfig = textConfig.value;
    nextTextConfig.text = 'initializing!';
    textConfig.value = nextTextConfig;
    breakWalls();
}

const sleep = async () => {
    await new Promise(r => setTimeout(r, 500));
}

const getIndex = (i: number, j: number) => i + j * size;
const randomIndex = (arr: any[]) => Math.floor(Math.random() * arr.length);

const setVisited = (i: number, visited: boolean) => {
    let modCells = cells.value;
    modCells[i].visited = visited;
    modCells[i].id = modCells[i].id + num;
}

const isLogging = true;

const log = (m: any, ...e: any[]) => {
    if (isLogging) {
        console.log(m, e);
    }
}

const getNeedVisit = (x: number, y: number, visited: boolean, checkWalls: boolean = false) => {
    let needVisit = Array();
    // check left
    if (x > 0) {
        const lIndex = getIndex(x - 1, y);
        const cell = cells.value[lIndex];
        if (cell.visited == visited && (!checkWalls || cellLeft(cell.walls) == cell.walls)) {
            needVisit.push(cell);
            log('added left', cell);
        }
    }
    // check right
    if (x < size - 1) {
        const rIndex = getIndex(x + 1, y);
        const cell = cells.value[rIndex];
        if (cell.visited == visited && (!checkWalls || cellRight(cell.walls) == cell.walls)) {
            needVisit.push(cell);
            console.log('added right');
            console.log(cell)
        }
    }
    // check top
    if (y > 0) {
        const tIndex = getIndex(x, y - 1);
        const cell = cells.value[tIndex];
        if (cell.visited == visited && (!checkWalls || cellTop(cell.walls) == cell.walls)) {
            needVisit.push(cell);
            console.log('added top');
            console.log(cell)
        }
    }
    // check bottom
    if (y < size - 1) {
        const bIndex = getIndex(x, y + 1);
        const cell = cells.value[bIndex];
        if (cell.visited == visited && (!checkWalls || cellBottom(cell.walls) == cell.walls)) {
            needVisit.push(cell);
            console.log('added bottom');
            console.log(cell)
        }
    }
    return needVisit
};

const breakWall = (x: number, y: number, toX: number, toY: number) => {
    const curr = cells.value[getIndex(x, y)];
    const to = cells.value[getIndex(toX, toY)];
    if (toX < x) {
        // left
        console.log('break left');
        curr.walls = cellLeft(curr.walls);
        to.walls = cellRight(to.walls);
    } else if (toX > x) {
        // right
        console.log('break right');
        curr.walls = cellRight(curr.walls);
        to.walls = cellLeft(to.walls);
    } else if (toY < y) {
        // top
        console.log('break top');
        curr.walls = cellTop(curr.walls);
        to.walls = cellBottom(to.walls);
    } else if (toY > y) {
        // bottom
        console.log('break bottom');
        curr.walls = cellBottom(curr.walls);
        to.walls = cellTop(to.walls);
    }
    console.log(x, y, toX, toY);
    cells.value[getIndex(x, y)] = curr;
    cells.value[getIndex(toX, toY)] = to;
}

const breakEntranceAndExit = () => {
    let entrance = cells.value[0];
    let exit = cells.value[cells.value.length - 1];
    entrance.walls = 0;
    entrance.id += 100;
    exit.walls = 0;
    exit.id += 100;
    cells.value[0] = entrance;
    cells.value[cells.value.length - 1] = exit;
}

const resetCellsVisited = () => {
    for (let index = 0; index < cells.value.length; index++) {
        setVisited(index, false);
    }
}

const breakWalls = () => {
    breakWallsR(0, 0);
    const temp = cells.value.slice();
    cells.value = temp;
    const nextTextConfig = textConfig.value;
    nextTextConfig.text = 'done!';
    textConfig.value = nextTextConfig;
};

const breakWallsR = (i: number, j: number) => {
    setVisited(getIndex(i, j), true);
    while (true) {
        let needVisit = getNeedVisit(i, j, false);
        if (needVisit.length == 0) {
            return;
        }
        const randInd = randomIndex(needVisit);
        const dir = needVisit[randInd];
        needVisit.splice(randInd, 1);
        const toI = dir.x;
        const toJ = dir.y;
        breakWall(i, j, toI, toJ);
        // alert(`(${i}, ${j}) > (${toI}, ${toJ})`)
        breakWallsR(toI, toJ);
    }
};

const solve = () => {
    solveR(0, 0);
}

const solveR = (i: number, j: number) => {
    // TODO: implement step
    const curr = cells.value[getIndex(i, j)];
    setVisited(getIndex(i, j), true);
    if (i == size && j == size) {
        return true;
    }
    let needVisit = getNeedVisit(i, j, false, true);
    needVisit.forEach(cell => {
        console.log(cell);
    });
}
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