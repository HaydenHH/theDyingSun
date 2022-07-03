window.onload = () => {

  let allCount = 0
  let sunwidth= "60%"
  let sunleft= "20%"

  function drawSun(path){
    let sun = document.createElement("img");
    sun.src = path;
    sun.style.top = -30+allCount*3+"px"
    
    sun.style.zIndex = 1
    sun.style.width = sunwidth
    sun.style.left = sunleft
    
    return sun
  }


  function drawAni(){
    let ani = document.createElement("img")
    ani.src = `./images/ani/ani${Math.floor(Math.random()*4)+1}.png`
    ani.style.width="68px"
    ani.style.left = Math.random()*200+20 + "px"
    ani.style.transform = `scaleX(${Math.random()>0.5?1:-1})`
    ani.style.opacity = `${Math.random()>0.5?1:0}`
    ani.style.bottom=10+"px"
    ani.style.zIndex=10
    return ani
  }

  //定义场景2的绘制方法
   function createScene1(草丛数量 = 5)
 
   {let section = document.createElement("section");
    section.classList.add("g");
    //创建section元素,并且增加了g类

    let bg = document.createElement("img");
    bg.src = `./img/stage2scence1/bg.png`;
    bg.style.zIndex = 0

    let house = document.createElement("img");
    house.src = `./img/stage2scence1/s2p1e1.png`;
    house.style.zIndex = 2
    house.classList.add('bg-img')
    house.style.bottom = 100 + 'px'

    let ground = document.createElement("img");
    ground.src = `./img/stage2scence1/s2p1e10.png`;
    ground.style.bottom = 0
    ground.style.zIndex = 2
    ground.classList.add('bg-img')
    
    let sun = drawSun(`./img/stage2scence1/s2p1e7.png`)
    




    // gsap.to(eleL,{y:50,repeat:-1,yoyo:true,delay:Math.random()*1})

    section.appendChild(drawAni())
    section.appendChild(drawAni())
    section.appendChild(bg);
    section.appendChild(house);
    section.appendChild(ground);
    section.appendChild(sun);


    //随机草丛
    // let 数量 = 3;
    
    for (let i = 0; i < 草丛数量; i++) {
      let grass = document.createElement("img");
      grass.src = `./img/stage2scence1/s2p1e${4 + Math.round(Math.random())}.png`;
      grass.style.bottom = Math.random() * 20 + 'px'
      grass.style.left = Math.random() * 500 + 'px'
      grass.style.zIndex = 4
      grass.style.width = Math.random() * 20 + 50 + 'px'
      section.appendChild(grass);}
   
    for (let i = 0; i < 草丛数量; i++) {
      let tree = document.createElement("img");
      tree.src = `./img/stage2scence1/s2p1e${2 + Math.round(Math.random())}.png`;
      tree.style.bottom = Math.random() * 20 + 'px'
      tree.style.left = Math.random() * 500 + 'px'
      tree.style.zIndex = 5
      tree.style.width = Math.random() * 20 + 50 + 'px'
      section.appendChild(tree);}

    document.body.append(section)
    section.style.filter = `hue-rotate(${allCount/3}deg)`
    allCount+=1
  
  }
   function createScene2(行李箱数量=3 , 站牌=4 ){
    let section = document.createElement("section");
    section.classList.add("g");

    let bg = document.createElement("img");
    bg.src = `./img/stage1scence1/bg.png`;
    bg.style.zIndex = 1

    // let sun = document.createElement("img");
    // sun.src = `./img/stage1scence1/s1p1e1.png`;
    // sun.style.zIndex = 3
    // sun.style.bottom = -allCount*0+100+"px"
    // sun.style.left = sunleft
    // sun.style.width = sunwidth

    let sun = drawSun(`./img/stage1scence1/s1p1e1.png`)

    let cloud1 = document.createElement("img");
    cloud1.src = `./img/stage1scence1/s1p1e2.png`;
    cloud1.style.zIndex = 4
    cloud1.style.top = 50 + "px"
    cloud1.style.left = "25%"
    cloud1.style.width = 40+"px"

    let cloud2 = document.createElement("img");
    cloud2.src = `./img/stage1scence1/s1p1e2.png`;
    cloud2.style.zIndex = 4
    cloud2.style.top = 50 + "px"
    cloud2.style.left = "25%"
    cloud2.style.width = 40+"px"
    

    let plant = document.createElement("img");
    plant.src = `./img/stage1scence1/s1p1e12.png`;
    plant.style.zIndex = 4
    plant.style.top = 150 +"px"
    plant.style.width = 350+"px"
    plant.style.left = 0+"px"

    let ground = document.createElement("img");
    ground.src = `./img/stage1scence1/s1p1e8.png`;
    ground.style.zIndex = 2
    ground.style.bottom = 0
    ground.style.width = 300+"px"
    ground.style.left = 0+"px"
 
    let train = document.createElement("img");
    train.src = `./img/stage1scence1/s1p1e10.png`;
    train.style.zIndex = 4
    train.style.top = 173 +"px"
    train.style.width = 1000+"px"
    train.style.left = Math.random()*1000 + 'px'
    gsap.to(train,{x:-1000,duration:4,delay:Math.random()*13,repeatDelay:5,repeat:Infinity})
    
    let chair = document.createElement("img");
    chair.src = `./img/stage1scence1/s1p1e9.png`;
    chair.style.zIndex = 5
    chair.style.top = 190 +"px"
    chair.style.width = 100+"px"
    chair.style.left = 70+"px"

    let sign = document.createElement("img");
        sign.src = `./img/stage1scence1/s1p1e${5 + Math.round(Math.random()*2)}.png`;
        sign.style.bottom = 260+ 'px'
        sign.style.left = 0 + 'px'
        sign.style.zIndex = 6
        sign.style.width = 300 + 'px'
        
    
    for (let i = 0; i < 行李箱数量; i++) {
      let bag = document.createElement("img");
      bag.src = `./img/stage1scence1/s1p1e${3 + Math.round(Math.random())}.png`;
      bag.style.bottom = Math.random() * 20 + 'px'
      bag.style.left = Math.random() * 500 + 'px'
      bag.style.zIndex = 6
      bag.style.width = Math.random() * 20 + 30 + 'px'
      section.appendChild(bag);}

    section.appendChild(bg);
    section.appendChild(sun);
    section.appendChild(cloud1);
    section.appendChild(cloud2);
    section.appendChild(plant);
    section.appendChild(train);
    section.appendChild(chair);
    section.appendChild(sign);
    section.appendChild(ground);
    
    section.appendChild(drawAni())
    
    
    document.body.append(section)
    // section.style.filter = `saturation(${allCount%33/33}deg)`
    console.log(allCount%33/33);
    allCount+=1
  }



  function createScene3(电池数量=3 , 站牌=4 ){
    let section = document.createElement("section");
    section.classList.add("g");
    
    let bg = document.createElement("img");
    bg.src = `./img/stage1scence2/bg.png`;
    bg.style.zIndex = 1
    bg.style.width =300+"px"

    let ground = document.createElement("img");
    ground.src = `./img/stage1scence2/s1p2e4.png`;
    ground.style.zIndex = 1
    ground.style.left = 0
    ground.style.width = 310+"px"
    ground.style.bottom = 0

    // let sun = document.createElement("img");
    // sun.src = `./img/stage1scence2/s1p2e1.png`;
    // sun.style.zIndex = 3
    // sun.style.left =sunleft
    // sun.style.width = sunwidth
    // sun.style.bottom = -allCount*5+100+"px"

    let sun = drawSun(`./img/stage1scence2/s1p2e1.png`)

    let robotleft = document.createElement("img");
    robotleft.src = `./img/stage1scence2/s1p2e9.png`;
    robotleft.style.zIndex = 2
    robotleft.style.left = 0+"px"
    robotleft.style.width = 120+"px"
    robotleft.style.bottom = 100+"px"

    let robotright = document.createElement("img");
    robotright.src = `./img/stage1scence2/s1p2e10.png`;
    robotright.style.zIndex = 2
    robotright.style.right = 0+"px"
    robotright.style.width = 120+"px"
    robotright.style.bottom = 100+"px"

    let clampright = document.createElement("img");
    clampright.src = `./img/stage1scence2/s1p2e5.png`;
    clampright.style.zIndex = 4
    clampright.style.left = 190+"px"
    clampright.style.width = 70+"px"
    clampright.style.bottom = 173+"px"

    let clampleft = document.createElement("img");
    clampleft.src = `./img/stage1scence2/s1p2e6.png`;
    clampleft.style.zIndex = 4
    clampleft.style.right = 200+"px"
    clampleft.style.width = 70+"px"
    clampleft.style.bottom = 165+"px"

    let belt = document.createElement("img");
    belt.src = `./img/stage1scence2/s1p2e7.png`;
    belt.style.zIndex = 5
    belt.style.right = 0+"px"
    belt.style.width = 300+"px"
    belt.style.bottom = 120+"px"


    let armleft = document.createElement("img");
    armleft.src = `./img/stage1scence2/s1p2e2.png`;
    armleft.style.zIndex = 4
    armleft.style.right = 180+"px"
    armleft.style.width = 150+"px"
    armleft.style.bottom = Math.random() * 50 + 150 + 'px'

    let armright = document.createElement("img");
    armright.src = `./img/stage1scence2/s1p2e3.png`;
    armright.style.zIndex = 4
    armright.style.left = 180+"px"
    armright.style.width = 150+"px"
    armright.style.bottom = Math.random() * 30 + 80 + 'px'

    for (let i = 1; i < 电池数量; i++) {
      let battery = document.createElement("img");
      battery.src = `./img/stage1scence2/s1p2e4.png`;
      battery.style.bottom = Math.random() * 20 + 'px'
      battery.style.left = Math.random() * 500 + 'px'
      battery.style.zIndex = 3
      battery.style.width = Math.random() * 30 + 40 + 'px'
      section.appendChild(battery);
    }
    

    section.appendChild(bg);
    section.appendChild(ground);
    section.appendChild(sun);
    section.appendChild(robotleft);
    section.appendChild(robotright);
    section.appendChild(clampright);
    section.appendChild(clampleft);
    section.appendChild(belt);
    section.appendChild(armleft);
    section.appendChild(armright);

    section.appendChild(drawAni())


    document.body.append(section)
    section.style.filter = `hue-rotate(${allCount/3}deg)`
    allCount+=1
  }

  function createScene4(垃圾1数量=3 , 垃圾2数量=2 ){
    let section = document.createElement("section");
    section.classList.add("g");

    let bg = document.createElement("img");
    bg.src = `./img/stage2scence2/bg.png`;
    bg.style.zIndex = 1
    bg.style.width =300+"px"

    let ground = document.createElement("img");
    ground.src = `./img/stage2scence2/s2p2e11.png`;
    ground.style.zIndex = 1
    ground.style.top = 170+"px"
    ground.style.left = 0+"px"
    ground.style.width = 310+"px"
    ground.style.height = 178+"px"

    let robotleft = document.createElement("img");
    robotleft.src = `./img/stage2scence2/s2p2e6.png`;
    robotleft.style.zIndex = 2
    robotleft.style.bottom = 100+"px"
    robotleft.style.left = 0+"px"
    robotleft.style.width = 100+"px"

    let robotright = document.createElement("img");
    robotright.src = `./img/stage2scence2/s2p2e8.png`;
    robotright.style.zIndex = 2
    robotright.style.bottom = 100+"px"
    robotright.style.right = 0+"px"
    robotright.style.width = 100+"px"

    let robothead = document.createElement("img");
    robothead.src = `./img/stage2scence2/s2p2e7.png`;
    robothead.style.zIndex = 3
    robothead.style.bottom = 10+"px"
    robothead.style.right = Math.random() * 80 + 60 + 'px'
    robothead.style.width = 80+"px"

    let armleft = document.createElement("img");
    armleft.src = `./img/stage2scence2/s2p2e9.png`;
    armleft.style.zIndex = 4
    armleft.style.left = 0+"px"
    armleft.style.width = 100+"px"
    armleft.style.bottom = Math.random() * 10 + 30 + 'px'

    let armright = document.createElement("img");
    armright.src = `./img/stage2scence2/s2p2e10.png`;
    armright.style.zIndex = 4
    armright.style.right = 0+"px"
    armright.style.width = 130+"px"
    armright.style.bottom = Math.random() * 10 + 30 + 'px'

    // let sun = document.createElement("img");
    // sun.src = `./img/stage2scence2/s2p2e12.png`;
    // sun.style.zIndex = 2
    // sun.style.left =sunleft
    // sun.style.width = sunwidth
    // sun.style.bottom = Math.random() * 10 + 110+ 'px'

    let sun = drawSun(`./img/stage2scence2/s2p2e12.png`)

    
    
    section.appendChild(bg);
    section.appendChild(ground);
    section.appendChild(robotleft);
    section.appendChild(robotright);
    section.appendChild(robothead);
    section.appendChild(armleft);
    section.appendChild(armright);
    section.appendChild(sun);

    section.appendChild(drawAni())


    document.body.append(section)
    section.style.filter = `hue-rotate(${allCount/3}deg)`
    allCount+=1
  
  }


    //商场
    function createScene5(玩具数量=3 , 玩具2数量=2){
      let section = document.createElement("section");
      section.classList.add("g");

    let bg = document.createElement("img");
    bg.src = `./img/stage3scence1/bg.png`;
    bg.style.zIndex = 0
    bg.style.width =300+"px"

    let ground = document.createElement("img");
    ground.src = `./img/stage3scence1/s3p2e8.png`;
    ground.style.zIndex = 2
    ground.style.bottom = 0+"px"
    ground.style.left = 0+"px"
    ground.style.width = 320+"px"

    // let sun = document.createElement("img");
    // sun.src = `./img/stage3scence1/s3p2e1.png`;
    // sun.style.zIndex = 1
    // sun.style.left =sunleft
    // sun.style.width = sunwidth
    // sun.style.bottom = -allCount*0+100+"px"

    let sun = drawSun(`./img/stage3scence1/s3p2e1.png`)

    

    let mirror = document.createElement("img");
    mirror.src = `./img/stage3scence1/s3p2e2.png`;
    mirror.style.zIndex = 5
    mirror.style.bottom = 80+"px"
    mirror.style.left = 10+"px"
    mirror.style.width = 50+"px"

    let clothes = document.createElement("img");
    clothes.src = `./img/stage3scence1/s3p2e3.png`;
    clothes.style.zIndex = 3
    clothes.style.bottom = 85+"px"
    clothes.style.left = Math.random() * 100 + 50 + 'px'
    clothes.style.width = 150+"px"

    let music = document.createElement("img");
    music.src = `./img/stage3scence1/s3p2e4.png`;
    music.style.zIndex = 2
    music.style.bottom = 95+"px"
    music.style.left = Math.random() * 150 + 50 + 'px'
    music.style.width = 50+"px"

    let computer = document.createElement("img");
   computer.src = `./img/stage3scence1/s3p2e5.png`;
   computer.style.zIndex = 5
   computer.style.bottom = 30+"px"
   computer.style.left = 180+ 'px'
   computer.style.width = 90+"px"

   let sofa = document.createElement("img");
   sofa.src = `./img/stage3scence1/s3p2e6.png`;
   sofa.style.zIndex = 5
   sofa.style.bottom = 10+"px"
   sofa.style.left = 110+ 'px'
   sofa.style.width = 70+"px"

   let control = document.createElement("img");
   control.src = `./img/stage3scence1/s3p2e7.png`;
   control.style.zIndex = 5
   control.style.bottom = 10+"px"
   control.style.left = 170+ 'px'
   control.style.width = 30+"px"

    
   
   for (let i = 0; i < 玩具数量; i++) {
    let toy = document.createElement("img");
    toy.src = `./img/stage3scence1/s3p2e${9 + Math.round(Math.random())}.png`;
    toy.style.bottom =200+"px"
    toy.style.left = Math.random() * 500 + 'px'
    toy.style.zIndex = 6
    toy.style.width = Math.random() * 70 + 20 + 'px'
    section.appendChild(toy);}

    for (let i = 0; i < 玩具2数量; i++) {
      let toy2 = document.createElement("img");
      toy2.src = `./img/stage3scence1/s3p2e${12 + Math.round(Math.random())}.png`;
      toy2.style.bottom =200+"px"
      toy2.style.left = Math.random() * 500 + 'px'
      toy2.style.zIndex = 6
      toy2.style.width = Math.random() * 20 + 20 + 'px'
      section.appendChild(toy2);}



    section.appendChild(bg);
    section.appendChild(ground);
    section.appendChild(sun);
    section.appendChild(mirror);
    section.appendChild(clothes);
    section.appendChild(music);
    section.appendChild(computer);
    section.appendChild(sofa);
    section.appendChild(control);
    section.appendChild(drawAni())




      document.body.append(section)
      section.style.filter = `hue-rotate(${allCount/3}deg)`
      allCount+=1}


      function createScene6(云数量=3 , 玩具2数量=2){
        let section = document.createElement("section");
        section.classList.add("g");

    let bg = document.createElement("img");
    bg.src = `./img/stage3scence2/bg.png`;
    bg.style.zIndex = -1
    bg.style.width =300+"px"

    let ground = document.createElement("img");
    ground.src = `./img/stage3scence2/s3p3e13.png`;
    ground.style.zIndex = 3
    ground.style.width =320+"px"
    ground.style.bottom =0+"px"

    let ground2 = document.createElement("img");
    ground2.src = `./img/stage3scence2/s3p3e12.png`;
    ground2.style.zIndex = 2
    ground2.style.width =300+"px"
    ground2.style.bottom =71+"px"

    // let sun = document.createElement("img");
    // sun.src = `./img/stage3scence2/s3p3e14.png`;
    // sun.style.zIndex = 0
    // sun.style.width =sunwidth
    // sun.style.bottom =-allCount*1+100+"px"
    // sun.style.left =sunleft

    let sun = drawSun(`./img/stage3scence2/s3p3e14.png`)

    let build = document.createElement("img");
    build.src = `./img/stage3scence2/s3p3e${1+ Math.round(Math.random()*3)}.png`;
    build.style.bottom = 100+ 'px'
    build.style.left = 90 + 'px'
    build.style.zIndex = 1
    build.style.width = 23+ 'px'

    let build2 = document.createElement("img");
    build2.src = `./img/stage3scence2/s3p3e${1+ Math.round(Math.random()*3)}.png`;
    build2.style.bottom = 100+ 'px'
    build2.style.left = 130 + 'px'
    build2.style.zIndex = 1
    build2.style.width = 35+ 'px'

    let build3 = document.createElement("img");
    build3.src = `./img/stage3scence2/s3p3e${1+ Math.round(Math.random()*4)}.png`;
    build3.style.bottom = 100+ 'px'
    build3.style.left = 180+ 'px'
    build3.style.zIndex = 1
    build3.style.width = 35+ 'px'

    let plant = document.createElement("img");
    plant.src = `./img/stage3scence2/s3p3e11.png`;
    plant.style.zIndex = 4
    plant.style.width =200+"px"
    plant.style.bottom =60+"px"
    plant.style.left =60+"px"

    let lamp = document.createElement("img");
    lamp.src = `./img/stage3scence2/s3p3e7.png`;
    lamp.style.zIndex = 5
    lamp.style.bottom = 30+"px"
    lamp.style.left = Math.random() * 150 + 50 + 'px'
    lamp.style.width = 50+"px"

    let lamp2 = document.createElement("img");
    lamp2.src = `./img/stage3scence2/s3p3e8.png`;
    lamp2.style.zIndex = 6
    lamp2.style.bottom = 10+"px"
    lamp2.style.left = Math.random() * 150 + 50 + 'px'
    lamp2.style.width = 50+"px"

    let car1 = document.createElement("img");
    car1.src = `./img/stage3scence2/s3p3e9.png`;
    car1.style.zIndex = 3
    car1.style.bottom = 80+"px"
    car1.style.left = Math.random() * 200 + 50 + 'px'
    car1.style.width = 65+"px"

    let car2 = document.createElement("img");
    car2.src = `./img/stage3scence2/s3p3e10.png`;
    car2.style.zIndex = 2
    car2.style.bottom = 90+"px"
    car2.style.left = Math.random() * 200 + 50 + 'px'
    car2.style.width = 65+"px"



    for (let i = 0; i < 云数量; i++) {
      let cloud = document.createElement("img");
      cloud.src = `./img/stage3scence2/s3p3e5.png`;
      cloud.style.bottom =200+"px"
      cloud.style.left = Math.random() * 500 + 'px'
      cloud.style.zIndex = 6
      cloud.style.width = Math.random() * 20 + 35 + 'px'
      section.appendChild(cloud);}



    section.appendChild(bg);
    section.appendChild(ground);
    section.appendChild(ground2);
    section.appendChild(sun);
    section.appendChild(build);
    section.appendChild(build2);
    section.appendChild(build3);
    section.appendChild(lamp);
    section.appendChild(lamp2);
    section.appendChild(plant);
    section.appendChild(car1);
    section.appendChild(car2);
    section.appendChild(drawAni())
    
    
    function createScene7(垃圾1数量=3 , 垃圾2数量=2 ){
      let section = document.createElement("section");
      section.classList.add("g");

  let bg = document.createElement("img");
  bg.src = `./img/stage3scence3/bg.png`;
  bg.style.zIndex = -1
  bg.style.width =300+"px"

  let ballon = document.createElement("img");
  ballon.src = `./img/stage3scence3/s3p3e1.png`;
  ballon.style.zIndex = -1
  ballon.style.width =300+"px" 


  




  
  
  
  
  
  
  section.appendChild(bg);}
 




        document.body.append(section)
        section.style.filter = `hue-rotate(${allCount/3}deg)`
        allCount+=1
      }

      function createScene7(){
        let section = document.createElement("section");
        section.classList.add("g");

    // let sun = document.createElement("img");
    // sun.src = `./img/stage1scence3/s1p3e1.png`;
    // sun.style.zIndex = 1
    // sun.style.width =sunwidth
    // sun.style.left = sunleft
    // sun.style.bottom = 100+"px"

    let sun = drawSun( `./img/stage1scence3/s1p3e1.png`)

    let bg= document.createElement("img");
    bg.src = `./img/stage1scence3/s1p3e2.png`;
    bg.style.zIndex = 0
    bg.style.width =300+"px"
    bg.style.left = 0
    bg.style.bottom = 0+"px"

    let build= document.createElement("img");
   build.src = `./img/stage1scence3/s1p3e3.png`;
   build.style.zIndex = 2
   build.style.width =300+"px"
   build.style.left = 0
   build.style.bottom = 0+"px"


    
    


    section.appendChild(sun);
    section.appendChild(bg);
    section.appendChild(build);
    section.appendChild(drawAni())
    document.body.append(section)
      }
      function createScene8(){
        let section = document.createElement("section");
        section.classList.add("g");

    // let sun = document.createElement("img");
    // sun.src = `./img/stage2scence3/s2p3e1.png`;
    // sun.style.zIndex = 1
    // sun.style.width =sunwidth
    // sun.style.left = sunleft
    // sun.style.bottom = 100+"px"

    let sun = drawSun(`./img/stage2scence3/s2p3e1.png`)


    let bg= document.createElement("img");
    bg.src = `./img/stage2scence3/s2p3e2.png`;
    bg.style.zIndex = 0
    bg.style.width =310+"px"
    bg.style.left = 0
    bg.style.bottom = 0+"px"

    let build= document.createElement("img");
    build.src = `./img/stage1scence3/s1p3e3.png`;
    build.style.zIndex = 3
    build.style.width =300+"px"
    build.style.left = 0
    build.style.bottom = 0+"px"


    section.appendChild(sun);
    section.appendChild(bg);
    section.appendChild(build);
    section.appendChild(drawAni())
   
    document.body.append(section)
      }

      function createScene9(树数量=2 , 草丛数量=2){
        let section = document.createElement("section");
        section.classList.add("g");

    // let sun = document.createElement("img");
    // sun.src = `./img/stage3scence3/sun.png`;
    // sun.style.zIndex = 1
    // sun.style.width =sunwidth
    // sun.style.left = sunleft
    // sun.style.bottom = 100+"px"

    let sun = drawSun(`./img/stage3scence3/sun.png`)


    let bg= document.createElement("img");
    bg.src = `./img/stage3scence3/bg.png`;
    bg.style.zIndex = 0
    bg.style.width =500+"px"
    bg.style.left = 0
    bg.style.bottom = 50+"px"

    let ground= document.createElement("img");
    ground.src = `./img/stage3scence3/s3p1e9.png`;
    ground.style.zIndex = 2
    ground.style.width =500+"px"
    ground.style.left = 0
    ground.style.bottom = 0+"px"

    let ballon = document.createElement("img");
    ballon.src = `./img/stage3scence3/s3p1e1.png`;
    ballon.style.zIndex = 3
    ballon.style.bottom = 150+"px"
    ballon.style.left = Math.random() * 100 + 50 + 'px'
    ballon.style.width = 45+"px"

    let horse = document.createElement("img");
    horse.src = `./img/stage3scence3/s3p1e6.png`;
    horse.style.zIndex = 3
    horse.style.bottom = 100+"px"
    horse.style.left = Math.random() * 100 + 50 + 'px'
    horse.style.width = 70+"px"

    let wheel = document.createElement("img");
    wheel.src = `./img/stage3scence3/s3p1e7.png`;
    wheel.style.zIndex = 4
    wheel.style.bottom = 100+"px"
    wheel.style.left = Math.random() * 100 + 50 + 'px'
    wheel.style.width = 100+"px"

    for (let i = 0; i < 树数量; i++) {
      let tree = document.createElement("img");
      tree.src = `./img/stage3scence3/s3p1e${3 + Math.round(Math.random())}.png`;
      tree.style.bottom = 50 + 'px'
      tree.style.left = Math.random() * 500 + 'px'
      tree.style.zIndex = 5
      tree.style.width = Math.random() * 70 + 50 + 'px'
      section.appendChild(tree);}
      
      for (let i = 0; i < 草丛数量; i++) {
        let grass = document.createElement("img");
        grass.src = `./img/stage3scence3/s3p1e5.png`;
        grass.style.bottom = Math.random() * 30 + 'px'
        grass.style.left = Math.random() * 500 + 'px'
        grass.style.zIndex = 4
        grass.style.width = Math.random() * 20 + 50 + 'px'
        section.appendChild(grass);}



 

    section.appendChild(sun);
    section.appendChild(bg);
    section.appendChild(ground);
    section.appendChild(ballon);
    section.appendChild(horse);
    section.appendChild(wheel);
    section.appendChild(drawAni())
    
    
    document.body.append(section)
      }

  // createScene1();
  // createScene2();
  // createScene3();
  // createScene4();
  // createScene5();
  // createScene6();
  // createScene7();
  // createScene8();
  // createScene9();
   
 

function addScene(){
    if(allCount<100){

       if(allCount<33){
        const step1Rand=Math.random()
        if(step1Rand<0.3){
          let randCount = Math.floor(Math.random()*3)
          for(let i=0;i<randCount;i++){
            createScene6()
          }
        }else if(step1Rand >0.3 && step1Rand < 0.6){
          let randCount = Math.floor(Math.random()*3)
          for(let i=0;i<randCount;i++){
            createScene3()
          }
        }else{
          let randCount = Math.floor(Math.random()*3)
          for(let i=0;i<randCount;i++){
            createScene7()
            // 阶段一的最后一块场景
           
          }
        }
        
       }else if(allCount>33 && allCount<66){
        const step2Rand=Math.random()
        if(step2Rand>0.3){
          let randCount = Math.floor(Math.random()*3)
          for(let i=0;i<randCount;i++){
            createScene1()
          }
        }else if(step2Rand>0.3 && step2Rand< 0.6){
          let randCount = Math.floor(Math.random()*3)
          for(let i=0;i<randCount;i++){
            createScene4()
          }
        }else{
          let randCount = Math.floor(Math.random()*3)
          for(let i=0;i<randCount;i++){
            createScene8()
            // 阶段二的最后一块场景
          }
        }
  
       }else{
        const step3Rand=Math.random()
        if(step3Rand<0.3){
          let randCount = Math.floor(Math.random()*3)
          for(let i=0;i<randCount;i++){
            createScene5()
          }
        }else if(step3Rand>0.3&&step3Rand<0.6){
          let randCount = Math.floor(Math.random()*3)
          for(let i=0;i<randCount;i++){
            createScene2()
          }
        } else{
          let randCount = Math.floor(Math.random()*3)
          for(let i=0;i<randCount;i++){
           createScene9()
            // 阶段三的最后一块场景
          }
        }
  
       }
       
       
       allCount++
       
    } 
   
  }
  


  const handlerAni = gsap.to('#handler',{'rotateZ':360,duration:1,autoplay:false})
  const ani = lottie.loadAnimation({
    container: document.querySelector('#controller2'), // the dom element that will contain the animation
    renderer: 'canvas',
    loop: false,
    autoplay: true,
    path: 'machine.json' // the path to the animation json
  });

  for(let i=0;i<5;i++){
    addScene()
  }
  window.addEventListener('click',()=>{
      handlerAni.restart()
      addScene()
      document.querySelectorAll('.flash').forEach(flash=>{
        flash.classList.add('visible')
      })

      window.scrollTo({
        behavior:"smooth",
        top:window.innerHeight
      })

      setTimeout(()=>{
        document.querySelectorAll('.flash').forEach(flash=>{
          flash.classList.remove('visible')
        })
      },1000)

      ani.goToAndPlay(0)

      let allG = document.querySelectorAll('.g')
      
      allG.forEach((section,i)=>{
        section.style.filter = `grayscale(${100-Math.abs(i-100)}%)`
      })

      if(allCount>=100){
        document.querySelector('#sum').style.display = 'flex'
      }
     
  })
  
  setTimeout(() => {
    document.querySelector('#intro').style.transform = `translateX(-150vw)`
  }, 7000);

  document.querySelector('#closeIntro').addEventListener('click',()=>{
    console.log('sss');
    document.querySelector('#intro').style.transform = `translateX(-150vw)`
  })



} //END