index.ts // Business_dog
import Busy_boi.png from "Business_dog" ;
import busy_boi_front.png from "Business_dog"
import front-facing-busy-boi-pixilart.png from "Business_dog" 

const sprites : {
  Business_dog: new Business_dog ({
    x: 10,
    y: 25,
    direction: 90,
    costumeNumber: 1,
    size: 85,
    visible: true,
    layerOrder: 25
  })
}
new Sprite(Sprite.Busy_boi "Busy.boi.png")
new Trigger(Trigger.KEY_PRESSED, {key: "d"},
 Busy_boi.png.move(8.5)
 Busy_boi.png.x += 8.5
 while (!(Trigger)) { yield; }
)
 new Trigger(Trigger.KEY_PRESSED, {key: "a"})
 Busy_boi.png.move(-8.5)
 Busy_boi.png.x -= 8.5
 while (Trigger(Trigger.KEY_PRESSED, {key: "a"}) { yield; }
 )
 new Trigger(Trigger.KEY_PRESSED, {key: "w"}
 "front-facing-busy-boi-pixilart.png" , 
 )
