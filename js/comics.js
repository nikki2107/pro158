AFRAME.registerComponent("comic",{
    init : function(){
        this.placesContainer=this.el;
        this.createCards();
    },
    createCards:function(){
        const thumbnailsRef = [

            {
                id:"DOCTORSTRANGE",
                title:"DOCTORSTRANGE",
                url:"DOCTORSTRANGE.jpg"
            },
            {
                id:"IRONMAN",
                title:"IRONMAN",
                url:"IRONMAN.jpg"
            },
            {
                id:"LOKI",
                title:"LOKI",
                url:"LOKI.jpg"
            },
            {
                id:"SPIDERMAN",
                title:"SPIDERMAN",
                url:"SPIDERMAN.jpg"
            },

        ]

        let previousXPosition = -60;

        for (var item of thumbnailsRef){
            const posX = previousXPosition + 25;
            const posY = 10;
            const posZ = -40;
            const position = { x: posX, y: posY, z: posZ };
            previousXPosition = posX;
      
            // Border Element
            const borderEl = this.createBorder(position, item.id);
      
            // Thumbnail Element
            const thumbNail = this.createThumbNail(item);
            borderEl.appendChild(thumbNail);
      
            // Title Text Element
            const titleEl = this.createTitleEl(position, item);
            borderEl.appendChild(titleEl);
      
            this.placesContainer.appendChild(borderEl);
          }
        },
        createBorder: function(position,id){
            const entityEl = document.createElement("a-entity");
            entityEl.setAttribute("id", id);
            entityEl.setAttribute("visible", true);
            entityEl.setAttribute("geometry", {
                primitive: "ring",
                radiusInner: 9,
                radiusOuter: 10,
              });
              entityEl.setAttribute("position", position);
              entityEl.setAttribute("material", {
                color: "#0077CC",
                opacity: 1,
              });
              entityEl.setAttribute("cursor-listener",{})
              return entityEl;
          
              return entityEl;
            },
            createThumbNail: function (item) {
                const entityEl = document.createElement("a-entity");
                entityEl.setAttribute("visible", true);
                entityEl.setAttribute("geometry", {
                  primitive: "circle",
                  radius: 9,
                });
                entityEl.setAttribute("material", { src: item.url });
            
                return entityEl;
              },
              createTitleEl: function (position, item) {
                const entityEl = document.createElement("a-entity");
                entityEl.setAttribute("text", {
                  font: "exo2bold",
                  align: "center",
                  width: 70,
                  color: "#e65100",
                  value: item.title,
                });
                const elPosition = position;
                elPosition.y = -20;
                entityEl.setAttribute("position", elPosition);
                entityEl.setAttribute("visible", true);
                return entityEl;
              },
            });