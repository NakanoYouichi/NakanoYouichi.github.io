console.log('読みこきてすと')

$('#naka').on('click',function(){
    console.log(`クリックされました`);

    $('#naka').animate({
        'fontSize':'64px',
    }).animate({
        'fontSize':'16px',
    });
})