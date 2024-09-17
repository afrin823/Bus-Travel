function updaTeGrandTotalByUseCoupon(){
    const couponNewOfferString = document.getElementById('coupon-new-str').innerText;
    const couponCoupleString = document.getElementById('coupon-couple').innerText;
    const couponApplyField = document.getElementById('counpon-apply-field').value;
    const currentGrandTotal = getElementValueById('grand-total');
    if(currentGrandTotal < 2000){
        alert('you have already got this coupon');
        return;
    }
    if(couponApplyField === couponNewOfferString){
        let discoutNewOffer = currentGrandTotal * (15 /100);
        const newGrandTotal = currentGrandTotal - discoutNewOffer;
        setValueById('grand-total', newGrandTotal);
    
     // _______________add NEW15 coupon discount amount//
     function setDiscountCountonHtmlElement(){
        const discountContainer = document.getElementById('dis-coupon-price');
        const element = <p>Total discount:</p><p>${discoutNewOffer}</p>BDT
        const div = document.createElement('div');
        div.classList.add('flex', 'justify-between', 'font-bold');
        div.innerHTML = element;
        discountContainer.appendChild(div);
        //    ---------------hide coupon button & field----------------------//
        const disabledButton = document.getElementById('disable-btn');
        const disabledCouponField = document.getElementById('counpon-apply-field');
            disabledButton.classList.add('hidden');
            disabledCouponField.classList.add('hidden');

    }
    setDiscountCountonHtmlElement();
}
 else if(couponApplyField === couponCoupleString){
            let discountCoupleOffer =currentGrandTotal  * (20 /100);
            const updateGrandTotal = currentGrandTotal - discountCoupleOffer;

            setValueById('grand-total', updateGrandTotal);
              // _____add Couple 20 coupon discount amount//
          function setDiscountCountonHtmlElement(){
            const discountContainer = document.getElementById('dis-coupon-price');
            const element = <p>Total discount:</p><p>BDT ${discountCoupleOffer}</p>
            const div = document.createElement('div');
            div.classList.add('flex', 'justify-between', 'font-bold', 'p-3');
            div.innerHTML = element;
            discountContainer.appendChild(div);
        // ---------------hide coupon button & field----------------------//
            const disabledButton = document.getElementById('disable-btn');
            const disabledCouponField = document.getElementById('counpon-apply-field');
                disabledButton.classList.add('hidden');
                disabledCouponField.classList.add('hidden');
        }
        setDiscountCountonHtmlElement();
        }
        else{
            alert('type right coupon');
            return
        }
    };
const seats = ['A1', 'A2', 'A3', 'A4', 'B1', 'B2', 'B3', 'B4', 'C1', 'C2', 'C3', 'C4', 'D1', 'D2', 'D3', 'D4', 'E1', 'E2', 'E3', 'E4', 'F1', 'F2', 'F3', 'F4', 'G1', 'G2', 'G3', 'G4', 'H1', 'H2', 'H3', 'H4', 'I1', 'I2', 'I3', 'I4', 'J1', 'J2', 'J3', 'J4']
for(const seat of seats){
    const selectSeat = document.getElementById(seat);
    selectSeat.addEventListener('click', setAll);    

    function setAll(){
        
        
        //set remain seats//
        const currentSeats = getElementValueById('remain-seats');
        if(currentSeats === 37){
            const disabledButton = document.getElementById('disable-btn');
            disabledButton.removeAttribute('disabled')
        }
        if(currentSeats <37){
            alert('You can not select more than 4 seats')
            return;
        }
        const updateSets = currentSeats - 1;
        setValueById('remain-seats', updateSets);
        selectSeat.classList.add('bg-[#1DD100]');
        

        // ______________________selected seats details//
          const selectedSeatDetailsContainer = document.getElementById('selected-seat-details');
          const element = <p>Seat Name: ${seat}</p><p>Economy</p><p>Price: 550</p>;
          const div =document.createElement('div');
          div.classList.add('flex', 'justify-between');
          div.innerHTML = element;
          selectedSeatDetailsContainer.appendChild(div);

        // __________________ set selected sets__//
        const currentSelectedSeats = getElementValueById('selceted-seat');
        const updaSelectedSeats = currentSelectedSeats + 1;
        setValueById('selceted-seat', updaSelectedSeats);
        

        //_set total price_//
        const currentTotal = getElementValueById('current-total');
        const updateTotal = currentTotal + 550;
        setValueById('current-total', updateTotal);
        setValueById('grand-total', updateTotal);
             
       
       
        selectSeat.addEventListener('click', function(){
            
        })
        //---------------- uses seats disabled--------------------//
        selectSeat.disabled = true; 

        // ---------------Next button validation---------------------//
        function openNextBtn(){
            let nextBtn = document.getElementById('next-btn');
            const numberInputValue = document.getElementById('number-field').value;
            if(numberInputValue !== ''){
                nextBtn.removeAttribute('disabled');
                console.log(nextBtn);
            }
            else{
                nextBtn.setAttribute('disabled');
            }
        }
        openNextBtn();
    };

    function nextBtnAnableByInputValue (){
        const numberInputValue = document.getElementById('number-field');
        let nextBtn = document.getElementById('next-btn');
        if(numberInputValue.value !== ''){
          nextBtn.disabled = false;
        }
        else{
            nextBtn.disabled = true;
        }
    }
};
function getElementValueById(elementId){
    const element = document.getElementById(elementId).innerText;
    const value = parseInt(element);
    return value;
    
}
getElementValueById('remain-seats');
function setValueById(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}
//___________ added scroller on buy button to go ticket section_______________ //
function openTicketSection(){
    const ticketSection = document.getElementById('ticket-section');
    ticketSection.scrollIntoView({behavior:'smooth'})
}