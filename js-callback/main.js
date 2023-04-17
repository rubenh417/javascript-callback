document.addEventListener('DOMContentLoaded', () => {

  let stocks = {
    Fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"],
  };

  let order = (Fruit_name, call_production) => {
    setTimeout(() => {
      console.log(`${stocks.Fruits[Fruit_name]} was selected`);
      call_production();
    }, 2000);
  };

  let production = () => {
    setTimeout(() => {
      console.log("production has started");
      setTimeout(() => {
        console.log("the fruit has been chopped");
        setTimeout(() => {
          console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);
          setTimeout(() => {
            console.log("the machine has been started");
            setTimeout(() => {
              console.log(`${stocks.holder[0]} was selected`);
              setTimeout(() => {
                console.log(`${stocks.toppings[0]} was added to ice cream`);
                setTimeout(() => {
                  console.log("serve ice cream");
                }, 2000);
              }, 3000);
            }, 2000);
          }, 1000);
        }, 1000);
      }, 2000);
    }, 0000);
  };

  order(0, production);

  document.getElementById("myButton").addEventListener("click", function() {
    order(0, production);
    // Add a new <p> element to the page
    const newElement = document.createElement("p");
    newElement.textContent = "New order placed!";
    document.body.appendChild(newElement);
    // Display an alert pop-up box
    alert("Your order has been placed!");
  });

});
