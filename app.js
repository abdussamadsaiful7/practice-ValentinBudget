    
  
    document.getElementById('kitKat-buy-btn').addEventListener('click', function(){
        const chocolateQuantity = getInputValue('kitKat-quantity');
        const kitKatCost = chocolateQuantity * 200;
        setInnerText('total-chocolate', kitKatCost);
        total();
    });
      
      
    document.getElementById('rose-buy-btn').addEventListener('click', function(){
        const roseQuantity = getInputValue('rose-quantity');
        const roseCost = roseQuantity * 100;
        setInnerText('total-rose', roseCost);
        total();
    });

    document.getElementById('diary-buy-btn').addEventListener('click', function(){
        const dairyQuantity = getInputValue('diary-quantity');
        const dairyCost = dairyQuantity * 100;
        setInnerText('total-diary', dairyCost);
        total();
    });


    function setInnerText(id, value){
        document.getElementById(id).innerText = value;

    };

    function getInputValue(id,){
        const value = document.getElementById(id).value; 
        return parseInt(value);
    };

    function total(params){
        const chocolate = document.getElementById('total-chocolate').innerText;
        const rose = document.getElementById('total-rose').innerText;
        const dairy = document.getElementById('total-diary').innerText;
     
        const totalSum = parseInt(chocolate) + parseInt(rose) + parseInt(dairy); 
        // document.getElementById('total-cost').innerText = totalSum;
        setInnerText('total-cost', totalSum); 

    };