let sandwich =  {
        bread: "honey_oat",
        veg: "carrot_vada",
        cheese: "amul",
        toppings: ["lettuce", "tomato", "mustard"]
      };
  
      let {bread, veg} = sandwich ;
      console.log("after destruct: ", bread, veg) ;
        
        bread = "plain"
        
            let {toppings} = sandwich ;
      console.log("after destruct: ", toppings) ;
      toppings[0] = "corn";