1. To place multiple images in top center

   ```html
   <div id="bulb_container">
     <img
       class="bulb_holder bulb"
       src="images/bulb_yellow.png"
       alt="bulb_yellow"
     />
     <img class="bulb_holder bulb" src="images/bulb_red.png" alt="bulb_red" />
     <img class="bulb_holder bulb" src="images/bulb_blue.png" alt="bulb_blue" />
     <img
       class="bulb_holder bulb"
       src="images/bulb_green.png"
       alt="bulb_green"
     />
     <img class="bulb_holder bulb" src="images/bulb_pink.png" alt="bulb_pink" />
     <img
       class="bulb_holder bulb"
       src="images/bulb_orange.png"
       alt="bulb_orange"
     />
   </div>
   ```

   ```css
   #bulb_container {
     display: flex;
     margin-left: auto;
     margin-right: auto;
     width: 90%;
     /* justify-content: center;
     align-items: center; */
   }

   .bulb {
     height: 50px;
     margin: auto;
   }
   ```
