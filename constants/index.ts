// NAVIGATION

export const NAV_LINKS = [
    {href: "/", key:"today_special_offers", label:"Today's Special Offers"},
    {href: "/", key:"why_food_hut", label:"Why Food Hut"},
    {href: "/", key:"our_menu", label:"Our Menu"},
    {href: "/", key:"our_popular_food", label:"Our Popular Food"}
]

// MEAL CARDS

export const MEAL_CARDS = [
    {
        mealName:"Kebab", 
        people: ["/meal_card_person_1.png", "/meal_card_person_2.png", "/meal_card_person_3.png"],  
        desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry", 
        rating:4.5, 
        image:"/kebap_card.png", 
        price:10,
        category: "Lunch"
    },
    {
        mealName:"Chicken Tikka", 
        people: ["/meal_card_person_4.png", "/meal_card_person_5.png", "/meal_card_person_6.png"], 
        desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry", 
        rating:4.8, 
        image:"/chicken_tikka_card.png", 
        price:15,
        category: "Mexican"
    },
    {
        mealName:"Desi Chowmein", 
        people: ["/meal_card_person_7.png", "/meal_card_person_8.png", "/meal_card_person_9.png"], 
        desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry", 
        rating:4.2, 
        image:"/desi_chowmein_card.png", 
        price:8,
        category: "Dinner"
    },
    {
        mealName:"Chicken Chargha", 
        people: ["/meal_card_person_1.png", "/meal_card_person_2.png", "/meal_card_person_3.png"], 
        desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry", 
        rating:5.0, 
        image:"/chicken_chargha_card.png", 
        price:28,
        category: "Lunch"
    },
]

// MULTIPLE SERVICE ICONS

export const MULTIPLE_SERVICE_ICONS = [
    {icon: "/online_order_icon.png", text: "Online Order"},
    {icon: "/24_7_icon.png", text: "24/7 Service"},
    {icon: "/pre_reservation_icon.png", text: "Pre Reservation"},
    {icon: "/pre_reservation_icon.png", text: "Oragonized Foodhut Place"},
    {icon: "/pre_reservation_icon.png", text: "Super Chef"},
    {icon: "/pre_reservation_icon.png", text: "Clean Kitchen"},
]

// MENU CATEGORIES

export const MENU_CATEGORIES = [
    "Ramen", "Breakfast", "Lunch", "Dinner", "Mexican", "Italian", "Desserts", "Drinks"
]