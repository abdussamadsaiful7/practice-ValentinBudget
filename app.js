    
  
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
        const diaryQuantity = getInputValue('diary-quantity');
        const diaryCost = diaryQuantity * 100;
        setInnerText('total-diary', diaryCost);
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
        const diary = document.getElementById('total-diary').innerText;

        const totalSum = parseInt(chocolate) + parseInt(rose) + parseInt(diary); 
        document.getElementById('total-cost').innerText = totalSum;
        setInnerText('total-cost', totalSum); 

    };


    document.getElementById('promoApply-btn').addEventListener('click', function(){
        const promoCode = getInputValue('promo-code');
       if(promoCode === 101){
        const total =  document.getElementById('total-cost').innerText;
        const sum = total - parseInt(total) * 0.1;
        setInnerText('all-total', sum);
       }
       else{
        alert('Wrong promo Code, try again with valid code!');
       };
        
    });


    
