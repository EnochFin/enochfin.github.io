<template>
    <div class="art">
        <ul class="art-list">
            <li>
                <img src="https://i.imgur.com/jbpsFrE.jpg" />
            </li>
            <li>
                <img src="https://i.imgur.com/GHFFxSF.jpg" />
            </li>
            <li>
                <img src="https://i.imgur.com/dQhodbO.jpg" />
            </li>
            <li>
                <img src="https://i.imgur.com/D1IviQV.jpg" />
            </li>
        </ul>
    </div>
</template>
  
<style>
@media (min-width: 1024px) {
    .art {
        min-height: 100vh;
        display: flex;
        align-items: center;
    }

}

.art-list li img {
    width: 425px;
    align-items: center;
}

.art-list {
    list-style-type: none;
    margin: 0;
    padding: 0;
}

.art ul li img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    padding-top: .5rem;
    width: 50%;
}
</style>
  