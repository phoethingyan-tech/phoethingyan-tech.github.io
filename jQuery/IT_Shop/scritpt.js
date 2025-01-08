$(document).ready(function() {
    count();
    $('.addToCart').click(function(){
        let id = $(this).data('id');
        let name = $(this).data('name');
        let price = $(this).data('price');
        // console.log(id, name, price);

        // list item
        let items = {
            id: id,
            name: name,
            price: price,
            qty: 1
        }

        let itemString = localStorage.getItem('shops');
        let itemArray;
        if(itemString == null) {
            itemArray = [];
        }
        else {
            //itemarray ပြောင်း String
            itemArray = JSON.parse(itemString);
        }
        //အသစ်ရောက်လာတဲ့ item တွေကို ထပ်ထည့်
        //ရိုးရိုးမထည့်ဘဲ Condition စစ်ပြီးမှထည့်မယ် qty ကို တိုးချင်လို့
        
        let status = false;
        $.each(itemArray, function(i,v) {
            if(id == v.id) {
                v.qty ++;
                status = true;
            }
        });

        if(status == false) {
            itemArray.push(items);
        }

        //array ကို string ပြောင်း
        let itemData = JSON.stringify(itemArray);

        //String ကို Localstorage ထဲ ေပြာင်းထည့်
        localStorage.setItem('shops',itemData);
        count();
    });

    function count() {
        let itemString = localStorage.getItem('shops');
        if(itemString) {
            let itemArray = JSON.parse(itemString);

            let count = 0;
            $.each(itemArray, function(i,v) {
                if(itemArray != 0) {
                    count += Number(v.qty);
                    $('#item-count').text(count);
                } else {
                    $('#item-count').text('0');
                }
            });
        }
    }

});