
   class Display {  }

   class Television extends Display { }

   class HiFi { }
   
   class Describer {
      static getName(a){ return a.constructor.name}
  }
   
    let tv = new Television();
   let radio = new HiFi();

   let tvType = Describer.getName(tv);
   let radioType = Describer.getName(radio);
   console.log(tvType, radioType );
