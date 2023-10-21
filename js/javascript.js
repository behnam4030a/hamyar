$('#slider-1').owlCarousel({
    items:4,
    nav:true,
    loop:true,
    margin:10,
    merge:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
});

$('#slider-2').owlCarousel({
    items:4,
    nav:true,
    loop:true,
    margin:10,
    merge:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
});


$('#slider-3').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

/************************************************* comment*********************/
let author = document.getElementById('tfeature-testimonial_author').innerHTML
let content = document.getElementById('tfeature-testimonial_content').innerHTML
let image = document.getElementById('tfeature-images').getAttribute('src')

function testimonialFeature(){
    if(tx_activeIndex > tx_length){tx_activeIndex = 0;}
    if(tx_activeIndex < 0){tx_activeIndex = tx_length;}
    $('#tfeature-testimonial_content').html(testimonials[tx_activeIndex]["content"]);
    $('#tfeature-testimonial_author').html(testimonials[tx_activeIndex]["author"]);
    
    //set images
    $('.tfeature-images_item').removeClass('left').removeClass('center').removeClass('right');
    $('.tfeature-images_item[data-id="'+tx_activeIndex+'"]').addClass('center');
    $('.tfeature-images_item[data-id="'+tx_activeIndex+'"]').prev().addClass('left');
    $('.tfeature-images_item[data-id="'+tx_activeIndex+'"]').next().addClass('right');
    
    //infinity look
    if(tx_activeIndex == 0){ $('.tfeature-images_item:last-of-type').addClass('left'); }
    if(tx_activeIndex == tx_length){ $('.tfeature-images_item:first-of-type').addClass('right'); }
    
}

var testimonials = [
    {"author": "احمد اسماعیلی", "content": "ممنون از همیار گرافیک بابت طرح های عالی و منحصربه فرد", "image": "./img/Keith Horton.png"},
    {"author": "علی حسنی", "content": "عالی بودید", "image": "./img/Annotation 2022-01-18 171200.png"},
    {"author": "محمد کاظمی", "content": "ممنون از سایت عالی تون", "image": "./img/Annotation 2022-01-18 171200 (1).png"},
    {"author": "Finn", "content": "Content Four", "image": "./img/Annotation 2022-01-18 171200.png"},
    {"author": "Poe", "content": "Content Five", "image": "./img/Annotation 2022-01-18 171200 (1).png"},
];

//set initial content
tx_activeIndex = 2;
tx_length = parseInt(testimonials.length)-1;
testimonialFeature();

//make image elements
for(var i=0; i<testimonials.length; i++) {
    switch(true){
        case(i==1):
            var placement = "left";
            break;
        case(i==2):
            var placement = "center";
            break; 
        case(i==3):
            var placement = "right";
            break;    
        default:
            var placement = "";
            break;
    }
    $('#tfeature-images').append('<div class="tfeature-images_item '+placement+'" data-id="'+i+'"><img src="'+testimonials[i]["image"]+'" alt=""></div>')
}    

$('#tfeature_prev').on('click', function(e){
    e.preventDefault();
    tx_activeIndex = tx_activeIndex-1;
    testimonialFeature();
});

$('#tfeature_next').on('click', function(e){
    e.preventDefault();
    tx_activeIndex = tx_activeIndex+1;
    testimonialFeature();
});

