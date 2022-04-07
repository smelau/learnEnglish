let html = ' ';


let model = {
    aktivside: 'home',

    mainTitle: 'Learn the words',
    
    engelsk: 'Hi there!<br> So you want to learn some more english? <br> That´s great. I love english.<br> Chose one of the options above.<br> Click on me to read the text in Norwegian',
    engelskSchool: 'Hi!<br> Now we are going to learn som words we use at school.<br> Chose one of the options above.<br> Click on me to read the text in Norwegian ',
    engelskMyself: 'Oh, you again!<br> Are you not bored yet? That´s great.<br> Let´s learn some more english. It will be fun.<br> Click on me to get the text in Norwegian',

    engelskCelebrations: 'Hi! <br> Here we go again! Let´s celebrate,<br> that´s always fun.  And you can click on me as usual to get the text on norwegian.',
    engelskMakingPlans: 'Hi!<br> Let´s make som plans,<br> and learn even more english.<br> You can always click on me to get the text on norwegian.',

    norsk: 'Hei du! <br> Så du har lyst til å lære litt mer engelsk? <br> Det er flott. Jeg elsker engelsk. <br> Velg en av alternativene over.<br> Klikk på meg for å få teksten på engelsk',
    norskSchool: 'Hei!<br> Nå skal vi lære noen ord vi bruker på skolen.<br> Velg en av alternativene over.<br> Klikk på meg for å få teksten på engelsk.',
    norskMyself: 'Å, deg igjen!<br> Har du ikke begynt å kjede deg enda?<br> Det er bra! La oss lære litt mer engelsk,<br>  det blir moro. Klikk på meg for å få teksten på engelsk.',
    norskCelebrations: 'Hei. Da er vi klare igjen. La oss feire, det er alltid moro. <br> Og du kan klikke på meg som vanlig for å få teksten på engelsk.',
    norskMakingPlans: 'Hei <br> La oss lage noen planer, og lære enda mer engelsk. Du kan alltid klikke på meg for å få teksten på engelsk.',
   
   

    

    svar3: '',
    svar4: '',
    output: '',
    translate: [
        {
            engelsk: 'So you want to learn some more english?'
        },
        {
            norsk: 'hei',
        },
    ],
    

    soundsNumbers: ['soundNumbers/First.m4a','soundNumbers/Second.m4a','soundNumbers/Third.m4a','/soundNumbers/Fourth.m4a','/soundNumbers/Fifth.m4a','/soundNumbers/Sixth.m4a','/soundNumbers/Seventh.m4a','/soundNumbers/Eighth.m4a','/soundNumbers/Ninth.m4a','/soundNumbers/Tenth.m4a',
    ],

    soundsSchool: ['/soundSchool/Swing.m4a','/soundSchool/Seesaw.m4a','/soundSchool/SkippingRope.m4a','/soundSchool/Hopscotch.m4a','/soundSchool/Slide.m4a','/soundSchool/Dustbin.m4a','/soundSchool/Stone.m4a','/soundSchool/Chalk.m4a','/soundSchool/Caretaker.m4a','/soundSchool/Dinner.m4a','/soundSchool/Lunch.m4a','/soundSchool/FriedEgg.m4a','/soundSchool/BoiledEgg.m4a','/soundSchool/Sandwich.m4a','/soundSchool/FishChips.m4a','/soundSchool/Bacon.m4a','/soundSchool/Sausage.m4a','/soundSchool/Sugar.m4a','/soundSchool/Biscuit.m4a','/soundSchool/Nut.m4a','/soundSchool/Pancakes.m4a','/soundSchool/Pie.m4a','/soundSchool/Cake.m4a',
    ],

    soundsMySelf: ['/soundsMySelf/Cheek.m4a', '/soundsMySelf/Back.m4a', '/soundsMySelf/Neck.m4a', '/soundsMySelf/Thumb.m4a', '/soundsMySelf/Stomach.m4a', '/soundsMySelf/Heel.m4a', '/soundsMySelf/Eyebrows.m4a', '/soundsMySelf/Swimsuit.m4a', '/soundsMySelf/SwimmingTrunks.m4a', '/soundsMySelf/Button.m4a', '/soundsMySelf/Pocket.m4a', '/soundsMySelf/Belt.m4a', '/soundsMySelf/Shoelaces.m4a', '/soundsMySelf/Slippers.m4a', '/soundsMySelf/Tights.m4a',],

    numbers: [
    {
        word: 'first',
        picture: 'ordenstall/1st.png',
        svar: '',
    },
    {
        word: 'second',
        picture: 'ordenstall/2nd.png',
        svar: '',
    },
    {
        word: 'third',
        picture: 'ordenstall/3rd.png',
        svar: '',
    },

    {
        word: 'fourth',
        picture: 'ordenstall/4th.png',
        svar: '',
    },
    {
        word: 'fifth',
        picture: 'ordenstall/5th.png',
        svar: '',
    },
    {
        word: 'sixth',
        picture: '/ordenstall/6th.png',
        svar: '',
    },
    {
        word: 'seventh',
        picture: '/ordenstall/7th.png',
        svar: '',
    },
    {
        word: 'eighth',
        picture: '/ordenstall/8th.png',
        svar: '',
    },
    {
        word: 'ninth',
        picture: '/ordenstall/9th.png',
        svar: '',
    },
    {
        word: 'tenth',
        picture: '/ordenstall/10th.png',
        svar: '',
    },
   
    ],

    school: [
        {
            word: 'a swing',
            picture: 'https://previews.123rf.com/images/graphicbee/graphicbee1611/graphicbee161100093/66571265-ragazzino-su-un-altalena.jpg',
            svar: '',
        },
        {
            word: 'a seesaw',
            picture: 'https://previews.123rf.com/images/captainvector/captainvector1508/captainvector150811234/43241517-enfants-sur-une-balan%C3%A7oire-%C3%A0-bascule.jpg',
            svar: '',
        },
        {
            word: 'a skipping rope',
            picture: 'https://previews.123rf.com/images/yusufdemirci/yusufdemirci1802/yusufdemirci180200145/94959103-illustration-vectorielle-de-corde-%C3%A0-sauter-enfant.jpg',
            svar: '',
        },
        {
            word: 'hopscotch',
            picture: 'https://cdn.shopify.com/s/files/1/2992/7324/products/TraditionalHopscotch_2000x2000.jpg?v=1598968607',
            svar: '',
        },
        {
            word: 'a slide',
            picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK-F5rDBD7pwnFUbH8RXiirdcxwYJosmhXmA&usqp=CAU',
            svar: '',
        },
        {
            word: 'a dustbin',
            picture: 'http://www.clker.com/cliparts/c/v/f/7/w/4/dustbin.svg',
            svar: '',
        },
        {
            word: 'a stone',
            picture: 'https://media.istockphoto.com/photos/stone-pebble-gray-picture-id1288973456?b=1&k=20&m=1288973456&s=170667a&w=0&h=GBGgp4yrZv4ooDBws8yHF24sJ3rkEpObYsBWpVNKFT8=',
            svar: '',
        },
        {
            word: 'chalk',
            picture: 'https://image.made-in-china.com/2f0j00DONQsBickkqV/Chalk-Factory-Chalk-White-Chalk-Chalks-Cheapest-Chalk-Chalks-School-Chalk.jpg',
            svar: '',
        },
        {
            word: 'a caretaker',
            picture: 'https://johnknifton.files.wordpress.com/2015/05/caret.jpg',
            svar: '',
        },
        {
            word: 'dinner',
            picture: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/high-protein-dinners-slow-cooker-meatballs-image-5a04d02.jpg?quality=90&resize=500,454',
            svar: '',
        },
        {
            word: 'lunch',
            picture: 'https://images.matprat.no/lndeh7alzy-related/mobile',
            svar: '',
        },
        {
            word: 'a fried egg',
            picture: 'https://www.greekboston.com/wp-content/uploads/2015/10/fried-egg.jpg',
            svar: '',
        },
        {
            word: 'a boiled egg',
            picture: 'https://elanaspantry.com/wp-content/uploads/2015/05/How-to-hard-Boil-Eggs-recipe-44081.jpg',
            svar: '',
        },
        {
            word: 'a sandwich',
            picture: 'https://miro.medium.com/max/1400/1*X-2vNN2t6wkYzwWfbsdYvg.jpeg',
            svar: '',
        },
        {
            word: 'fish and chips',
            picture: 'https://cdn.nomadfoodscdn.com/-/media/project/foodservices/norway/foodservices-no/opv/import/7310500092041_y7hjl2gg7mhb6n4wg2btstuuby000000.jpg?h=750&iar=0&w=750&hash=66755828E67DB9784196B844415AE87D',
            svar: '',
        },
        {
            word: 'bacon',
            picture: 'https://shared.cdn.smp.schibsted.com/v2/images/56af9f88-083b-4d55-863f-bef75b80a56e?fit=crop&format=auto&h=1124&w=2000&s=8c688abb56e13429d4fea1d67349925fff182412',
            svar: '',
        },
        {
            word: 'a sausage',
            picture: 'https://media.istockphoto.com/photos/sausage-on-a-fork-picture-id509510233?k=20&m=509510233&s=612x612&w=0&h=I8aDxqNnWS9nZ6243ulcYmZbDLIRJ-unVeBNHQZjOtA=',
            svar: '',
        },
        {
            word: 'sugar',
            picture: 'https://cdn.diabetesselfmanagement.com/2021/05/dsm-sugar-facts-shutterstock-1564269901.jpg',
            svar: '',
        },
        {
            word: 'a biscuit',
            picture: 'https://www.brewsnews.com.au/wp-content/uploads/2012/01/biscuit-definition-300x276.jpg',
            svar: '',
        },
        {
            word: 'a nut',
            picture: 'https://www.seriouseats.com/thmb/MWy_UEW8OkCf9BaEkvHaEgPtsm4=/500x375/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__images__22100414-walnuts2-ae36bdb609c248ba82df35177543f5d3.jpg',
            svar: '',
        },
        {
            word: 'pancakes',
            picture: 'https://assets.epicurious.com/photos/605ce315b1622a8602ec4bb0/9:4/w_4994,h_2219,c_limit/HomemadePancakeMix_RECIPE_v1_032521_11975_VOG_final.jpg',
            svar: '',
        },
        {
            word: 'a pie',
            picture: 'https://i.ytimg.com/vi/RoHWiA6pogg/maxresdefault.jpg',
            svar: '',
        },{
            word: 'a cake',
            picture: 'https://cdn.mos.cms.futurecdn.net/bs4QgGhS88LPx9bANmxQsD.jpg',
            svar: '',
        },
    ],
    
    mySelf: [

        {
            word: 'a cheek',
            picture: 'https://thumbs.dreamstime.com/b/cheeks-6412151.jpg',
            svar: '',
        },
        {
            word: 'a back',
            picture: 'https://previews.123rf.com/images/theblackrhino/theblackrhino1505/theblackrhino150500151/40261475-cartoon-of-back-of-african-man-with-blank-shirt.jpg',
            svar: '',
        },
        {
            word: 'a neck',
            picture: 'https://media.baamboozle.com/uploads/images/92219/1603104390_11169',
            svar: '',
        },
        {
            word: 'a thumb',
            picture: 'https://cdn2.vectorstock.com/i/thumb-large/89/71/thumb-up-icon-icon-cartoon-vector-13588971.jpg',
            svar: '',
        },
        {
            word: 'a stomach',
            picture: 'https://c8.alamy.com/comp/2DF3NT6/vector-illustration-of-cartoon-boy-sitting-with-a-full-stomach-2DF3NT6.jpg',
            svar: '',
        },
        {
            word: 'a heel',
            picture: 'https://c8.alamy.com/comp/GMN7W4/an-illustration-of-a-cartoon-human-foot-GMN7W4.jpg',
            svar: '',
        },
        {
            word: 'eyebrows',
            picture: 'https://st4.depositphotos.com/11506542/21372/v/600/depositphotos_213729436-stock-illustration-eyebrow-perfectly-shaped-permanent-make.jpg',
            svar: '',
        },
        {
            word: 'a swimsuit',
            picture: 'https://png.pngtree.com/element_our/20190604/ourlarge/pngtree-summer-summer-swimsuit-cartoon-free-material-image_1480928.jpg',
            svar: '',
        },
        {
            word: 'swimming trunks',
            picture: 'https://png.pngtree.com/png-clipart/20190118/ourlarge/pngtree-a-pair-of-swimming-trunks-blue-flower-swimming-pool-png-image_450205.jpg',svar: '',
        },
        {
            word: 'a button',
            picture: 'https://previews.123rf.com/images/ylivdesign/ylivdesign1612/ylivdesign161204107/67411691-button-icon-cartoon-illustration-of-button-vector-icon-for-web.jpg',
            svar: '',
        },
        {
            word: 'a pocket',
            picture: 'https://image.shutterstock.com/image-vector/pocket-vector-iconcartoon-icon-isolated-260nw-1779637247.jpg',
            svar: '',
        },
        {
            word: 'a belt',
            picture: 'https://previews.123rf.com/images/rubynurbaidi/rubynurbaidi1812/rubynurbaidi181200001/117627235-belt-cartoon.jpg',
            svar: '',
        },
        {
            word: 'shoelaces',
            picture: 'https://graphicriver.img.customer.envatousercontent.com/files/34485788/Shoes_11.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=590&s=555ebbd8b323837e9d6907975f1ba518',
            svar: '',
        },
        {
            word: 'slippers',
            picture: 'https://thumbs.dreamstime.com/b/patterned-slippers-icon-cartoon-style-vector-web-design-isolated-white-background-221978579.jpg',
            svar: '',
        },
        {
            word: 'tights',
            picture: 'https://cdn.w600.comps.canstockphoto.com/tights-dodo-collection-clipart-vector_csp37831757.jpg',
            svar: '',
        }, 
    ],

    makingPlans: [
        {
            sentence: 'town? to you Are  going',
            sentenceInput: '',
            sentenceCorrect: 'Are you going to town?',
        },
        {
            sentence: 'church goes friend My sundays. to on',
            sentenceInput: '',
            sentenceCorrect: 'My friend goes to church on sundays.',
        },
        {
            sentence: 'bus take I the school. to',
            sentenceInput: '',
            sentenceCorrect: 'I take the bus to school.',
        },
        {
            sentence: 'park. walk I dog my  in the',
            sentenceInput: '',
            sentenceCorrect: 'I walk my dog in the park.',
        },
        {
            sentence: 'trolley shopping. when go need I a  I',
            sentenceInput: '',
            sentenceCorrect: 'I need a trolley when I go shopping.',
        },
        {
            sentence: 'like I to cafe. to go the ',
            sentenceInput: '',
            sentenceCorrect: 'I like to go to the cafe.',
        },
        {
            sentence: 'It bakery. good in smells the',
            sentenceInput: '',
            sentenceCorrect: 'It smells good in the bakery.',
        },
        {
            sentence: 'at Look bench. that',//
            sentenceInput: '',
            sentenceCorrect: 'Should we sit at that bench?',
        },
        {
            sentence: 'There police officer. is a',
            sentenceInput: '',
            sentenceCorrect: 'There is a police officer.',
        },
        {
            sentence: 'pond. a little Thats',
            sentenceInput: '',
            sentenceCorrect: 'Thats a little pond.',
        },
        {
            sentence: 'Let us the cinema. go to',//
            sentenceInput: '',
            sentenceCorrect: 'We should go to the cinema.',
        },
        {
            sentence: 'bridge. long What a',
            sentenceInput: '',
            sentenceCorrect: 'What a long bridge.',
        },
        {
            sentence: 'plastic need I a bag.',
            sentenceInput: '',
            sentenceCorrect: 'I need a plastic bag.',
        },
        {
            sentence: 'Take coin. that ',//
            sentenceInput: '',
            sentenceCorrect: 'Flip a coin.',
        },
        {
            sentence: 'I to the need go hairdresser. to',
            sentenceInput: '',
            sentenceCorrect: 'I need to go to the hairdresser.',
        },{
            sentence: 'I zoo. the love',
            sentenceInput: '',
            sentenceCorrect: 'I love the zoo.',
        },
        {
            sentence: 'The are traffic red. lights',
            sentenceInput: '',
            sentenceCorrect: 'The traffic light is red.',
        },


    ]
}






