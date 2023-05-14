function newImage(src, positionLeft, positionBottom){
    let pineTree = document.createElement('img')
    pineTree.src = src
    pineTree.style.position = 'fixed'
    pineTree.style.left = positionLeft
    pineTree.style.bottom = positionBottom
    document.body.append(pineTree) 
}
function newItem(src, positionLeft, positionBottom){
    let sword = document.createElement('img')
    sword.src = src
    sword.position = 'fixed'
    sword.left = positionLeft
    sword.bottom = positionBottom
    document.body.append(sword)
    sword.addEventListener('click',function(){
        sword.remove()
    })
    
}

newImage('/assets/pine-tree.png','450px','200px')

newImage('assets/green-character.gif', '100px', '100px')

newImage('assets/tree.png','200px', '300px')
newImage('assets/pillar.png', '350px', '100px')
newImage('assets/crate.png', '150px', '200px')
newImage('assets/well.png', '500px', '425px')
newItem('assets/sword.png', '500px', '405px')