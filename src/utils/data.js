// Components
import { uniqueId } from "./utils";

const data = {
  branches: [
    {
      id: uniqueId(),
      name_en: "Smouha",
      name_ar: "سموحة",
      uniqueName: "smouha",
      area: "smouha-31-victor-emmanuel-street",
      unavial: [
        { id: uniqueId(), productUniqueName: "tefal-cook-natural-cooking-set" },
      ],
    },
    {
      id: uniqueId(),
      name_en: "Zizinia",
      name_ar: "زيزينيا",
      uniqueName: "zizinia",
      area: "zizinia-34-ahmed-yehia-street",
      unavial: [
        { id: uniqueId(), productUniqueName: "tefal-cook-natural-fryapn-set" },
      ],
    },
    {
      id: uniqueId(),
      name_en: "Al-Mamoura",
      name_ar: "المعمورة",
      uniqueName: "al-mamoura",
      area: "al-mamoura-1-al-nasr-street-al-maamoura-al-shati",
      unavial: [
        { id: uniqueId(), productUniqueName: "molonix-vitapress-juicer" },
      ],
    },
    {
      id: uniqueId(),
      name_en: "Al-Ajami",
      name_ar: "العجمى",
      uniqueName: "al-ajami",
      area: "al-ajami-shahr-al-asal-street-al-bitash",
      unavial: [
        { id: uniqueId(), productUniqueName: "Tefal-Silence-Force-Wall-Fan" },
      ],
    },
    {
      id: uniqueId(),
      name_en: "Kerir",
      name_ar: "كرير",
      uniqueName: "kerir",
      area: "kerir-sidi-kerir-military-village",
      unavial: [
        { id: uniqueId(), productUniqueName: "Tefal-Pizza-Tray" },
      ],
    },
    {
      id: uniqueId(),
      name_en: "Badr",
      name_ar: "بدر",
      uniqueName: "badr",
      area: "badr-badr-village",
      unavial: [
        { id: uniqueId(), productUniqueName: "Moulinex-Double-Force-Food-Processor" },
      ],
    },
    {
      id: uniqueId(),
      name_en: "Marina",
      name_ar: "ماريــــنا",
      uniqueName: "marina",
      area: "marina-champs-elysees-market-marina",
      unavial: [
        { id: uniqueId(), productUniqueName: "Tefal-Travel-Mug" },
      ],
    },
    {
      id: uniqueId(),
      name_en: "Saad Zaghloul Street",
      name_ar: "شارع سعد زغلول",
      uniqueName: "saad-zaghloul-street",
      area: "saad-zaghloul-street-manshiet-abaza",
      unavial: [
        { id: uniqueId(), productUniqueName: "tefal-cook-natural-fryapn-set" },
      ],
    },
    {
      id: uniqueId(),
      name_en: "the intersection of Mohamed Saeed",
      name_ar: "تقاطع شارع محمد سعيد",
      uniqueName: "the-intersection-of-mohamed-saeed-branch",
      area: "the-intersection-of-mohamed-saeed",
      unavial: [
        { id: uniqueId(), productUniqueName: "tefal-cook-natural-cooking-set" },
      ],
    },
    {
      id: uniqueId(),
      name_en: "41 Army Road",
      name_ar: "41 طريق الجيش",
      uniqueName: "41-army-road",
      area: "41-army-road-next-to-egyptair-office",
      unavial: [
        { id: uniqueId(), productUniqueName: "Tefal-Silence-Force-Wall-Fan" },
      ],
    },
    {
      id: uniqueId(),
      name_en: "Royal Plaza Tower",
      name_ar: "برج رويال بلازا",
      uniqueName: "royal-plaza-tower",
      area: "royal-plaza-tower-el-galaa-st",
      unavial: [
        { id: uniqueId(), productUniqueName: "Moulinex-Double-Force-Food-Processor" },
      ],
    },
    {
      id: uniqueId(),
      name_en: "New Damietta",
      name_ar: "دمياط الجديدة",
      uniqueName: "new-damietta",
      area: "new-damietta-gamal-abdel-nasser-street-central-district-city-grand-mall",
      unavial: [
        { id: uniqueId(), productUniqueName: "tefal-cook-natural-fryapn-set" },
      ],
    },
  ],
  countries: [
    {
      id: uniqueId(),
      uniqueName: "egypt",
      name_en: "Egypt",
      name_ar: "مصر",
      currency: {
        symbol_en: "EGP",
        symbol_ar: "جنيه",
      },
    },
  ],
  cities: [
    {
      id: uniqueId(),
      uniqueName: "alexandria-and-the-north-coast",
      name_en: "Alexandria and the North Coast",
      name_ar: "الإسكندرية والساحل الشمالي",
      countryUniqueName: "egypt",
    },
    {
      id: uniqueId(),
      uniqueName: "zagazig",
      name_en: "Zagazig",
      name_ar: "الزقازيق",
      countryUniqueName: "egypt",
    },
    {
      id: uniqueId(),
      uniqueName: "tanta",
      name_en: "Tanta",
      name_ar: "طنطا",
      countryUniqueName: "egypt",
    },
    {
      id: uniqueId(),
      uniqueName: "mansoura",
      name_en: "Mansoura",
      name_ar: "المنصورة",
      countryUniqueName: "egypt",
    },
    {
      id: uniqueId(),
      uniqueName: "mahalla",
      name_en: "Mahalla",
      name_ar: "المحلة",
      countryUniqueName: "egypt",
    },
    {
      id: uniqueId(),
      uniqueName: "new-damietta",
      name_en: "New damietta",
      name_ar: "دمياط الجديدة",
      countryUniqueName: "egypt",
    },
  ],
  areas: [
    {
      id: uniqueId(),
      uniqueName: "smouha-31-victor-emmanuel-street",
      name_en: "Smouha: 31 Victor Emmanuel Street",
      name_ar: "سموحة : 31 شارع فيكتور عمانويل",
      cityUniqueName: "alexandria-and-the-north-coast",
    },
    {
      id: uniqueId(),
      uniqueName: "zizinia-34-ahmed-yehia-street",
      name_en: "zizinia: 34 Ahmed Yehia Street",
      name_ar: "زيزينيا : 34 شارع أحمد يحيي",
      cityUniqueName: "alexandria-and-the-north-coast",
    },
    {
      id: uniqueId(),
      uniqueName: "al-mamoura-1-al-nasr-street-al-maamoura-al-shati",
      name_en: "Al-Mamoura: 1 Al-Nasr Street - Al-Maamoura Al-Shati",
      name_ar: "المعمورة : 1 شارع النصر – المعمورة الشاطئ",
      cityUniqueName: "alexandria-and-the-north-coast",
    },
    {
      id: uniqueId(),
      uniqueName: "al-ajami-shahr-al-asal-street-al-bitash",
      name_en: "Al-Ajami: Shahr Al-Asal Street - Al-Bitash",
      name_ar: "العجمى : شارع شهر العسل – البيطاش",
      cityUniqueName: "alexandria-and-the-north-coast",
    },
    {
      id: uniqueId(),
      uniqueName: "kerir-sidi-kerir-military-village",
      name_en: "Kerir: Sidi Kerir Military Village",
      name_ar: "كرير : قرية سيدى كرير العسكرية الكيلو 32.5",
      cityUniqueName: "alexandria-and-the-north-coast",
    },
    {
      id: uniqueId(),
      uniqueName: "badr-badr-village",
      name_en: "Badr: Badr Village - Kilo 82.5",
      name_ar: "بدر : قرية بدر – كيلو 82.5",
      cityUniqueName: "alexandria-and-the-north-coast",
    },
    {
      id: uniqueId(),
      uniqueName: "marina-champs-elysees-market-marina",
      name_en: "Marina: Champs Elysees Market - Marina",
      name_ar: "ماريــــنا : سوق الشانزلــــيزية - ماريـــــنا",
      cityUniqueName: "alexandria-and-the-north-coast",
    },
    {
      id: uniqueId(),
      uniqueName: "saad-zaghloul-street-manshiet-abaza",
      name_en: "Saad Zaghloul Street, Manshiet Abaza",
      name_ar: "شارع سعد زغلول، منشية أباظة",
      cityUniqueName: "zagazig",
    },
    {
      id: uniqueId(),
      uniqueName: "the-intersection-of-mohamed-saeed",
      name_en:
        "the intersection of Mohamed Saeed Al Arab Street and Al Ma'hada Street",
      name_ar: "تقاطع شارع محمد سعيد العرب و شارع المعاهدة",
      cityUniqueName: "tanta",
    },
    {
      id: uniqueId(),
      uniqueName: "41-army-road-next-to-egyptair-office",
      name_en: "41 Army Road - next to EgyptAir office",
      name_ar: "41 طريق الجيش - بجوار مكتب مصر للطيران",
      cityUniqueName: "mansoura",
    },
    {
      id: uniqueId(),
      uniqueName: "royal-plaza-tower-el-galaa-st",
      name_en: "Royal Plaza Tower - El-Galaa St.",
      name_ar: "برج رويال بلازا – ش الجلاء",
      cityUniqueName: "mahalla",
    },
    {
      id: uniqueId(),
      uniqueName:
        "new-damietta-gamal-abdel-nasser-street-central-district-city-grand-mall",
      name_en: "New Damietta : Gamal Abdel Nasser Street - Central District",
      name_ar: "دمياط الجديدة : شارع جمال عبد الناصر – المنطقه المركزيه",
      cityUniqueName: "new-damietta",
    },
  ],
  users: [
    // {
    //   id: uniqueId(),
    //   firstName: "Mohamed",
    //   lastName: "Mahrous",
    //   mobile: "00123456789",
    //   email: "mohamed@gmail.com",
    //   password: bcrypt.hashSync("123456"),
    //   type: "user",
    //   cart: [],
    //   addresses: [],
    //   orders: [],
    //   favourites: [],
    //   dateCreated: "2022-04-24T08:13:35.835Z",
    //   dateUpdated: "2022-04-24T08:13:35.835Z"
    // },
  ],
  categories: [
    {
      id: uniqueId(),
      name_en: "Grocery",
      name_ar: "البقالة",
      uniqueName: "grocery",
      image: "/images/categories/grocery.jpg",
      displayOrder: 1,
      // seo: {},
      children: [
        {
          id: uniqueId(),
          name_en: "Cheese",
          name_ar: "الجبن",
          uniqueName: "cheese",
          image: "/images/categories/cheese.jpg",
          displayOrder: 1,
          // seo: {},
        },
        {
          id: uniqueId(),
          name_en: "Dry Food",
          name_ar: "الاطعمة الجافة",
          uniqueName: "dry-food",
          image: "/images/categories/dry-food.jpg",
          displayOrder: 2,
          // seo: {},
        },
        {
          id: uniqueId(),
          name_en: "Candy & Chocolate",
          name_ar: "الحلويات و الشيكولاته",
          uniqueName: "candy-chocolate",
          image: "/images/categories/chocolate.jpg",
          displayOrder: 3,
          // seo: {},
        },
        {
          id: uniqueId(),
          name_en: "Rice & Grains",
          name_ar: "الارز و الحبوب",
          uniqueName: "rice-grains",
          image: "/images/categories/rice-grains.jpg",
          displayOrder: 4,
          // seo: {},
        },
        {
          id: uniqueId(),
          name_en: "Pasta & Noodles",
          name_ar: "المكرونة",
          uniqueName: "pasta-noodles",
          image: "/images/categories/pasta.jpg",
          displayOrder: 5,
          // seo: {},
        },
        {
          id: uniqueId(),
          name_en: "Canned Food",
          name_ar: "الاطعمه المعلبة",
          uniqueName: "canned-food",
          image: "/images/categories/canned-food.jpg",
          displayOrder: 6,
          // seo: {},
        },
        {
          id: uniqueId(),
          name_en: "Oil",
          name_ar: "الزيوت",
          uniqueName: "oil",
          image: "/images/categories/oil.jpg",
          displayOrder: 7,
          // seo: {},
        },
        {
          id: uniqueId(),
          name_en: "Fruits",
          name_ar: "الفواكة",
          uniqueName: "fruits",
          image: "/images/categories/fruits.jpg",
          displayOrder: 8,
          // seo: {},
        },
        {
          id: uniqueId(),
          name_en: "Backery",
          name_ar: "المخبوزات",
          uniqueName: "backery",
          image: "/images/categories/backery.jpg",
          displayOrder: 9,
          // seo: {},
        },
      ],
    },
    {
      id: uniqueId(),
      name_en: "Beverages",
      name_ar: "المشروبات",
      uniqueName: "beverages",
      image: "/images/categories/beverages.jpg",
      displayOrder: 2,
      // seo: {},
      children: [
        {
          id: uniqueId(),
          name_en: "Mineral Water",
          name_ar: "المياه المعدنيه",
          uniqueName: "mineral-water",
          image: "/images/categories/water.jpg",
          displayOrder: 1,
          // seo: {},
        },
        {
          id: uniqueId(),
          name_en: "Juices",
          name_ar: "العصائر",
          uniqueName: "juices",
          image: "/images/categories/juices.jpg",
          displayOrder: 2,
          // seo: {},
        },
        {
          id: uniqueId(),
          name_en: "Soft Drinks",
          name_ar: "المشروبات الغازية",
          uniqueName: "soft-drinks",
          image: "/images/categories/soft-drinks.jpg",
          displayOrder: 3,
          // seo: {},
        },
        {
          id: uniqueId(),
          name_en: "Tea",
          name_ar: "الشاي",
          uniqueName: "tea",
          image: "/images/categories/tea.jpg",
          displayOrder: 4,
          // seo: {},
        },
        {
          id: uniqueId(),
          name_en: "Coffee",
          name_ar: "القهوة",
          uniqueName: "coffee",
          image: "/images/categories/coffee.jpg",
          displayOrder: 5,
          // seo: {},
        },
      ],
    },
    {
      id: uniqueId(),
      name_en: "Beauty",
      name_ar: "الجمال",
      uniqueName: "beauty",
      image: "/images/categories/beauty.jpg",
      displayOrder: 3,
      // seo: {},
      children: [
        {
          id: uniqueId(),
          name_en: "Hair Care",
          name_ar: "العناية بالشعر",
          uniqueName: "hair-care",
          image: "/images/categories/hair-care.jpg",
          displayOrder: 1,
          // seo: {},
        },
        // {
        //   name_en: "Makeup",
        //   name_ar: "المكياج",
        //   uniqueName: "makeup",
        //   image: "",
        //   displayOrder: 2,
        //   // seo: {},
        // },
        {
          id: uniqueId(),
          name_en: "Skin Care",
          name_ar: "العناية بالبشرة",
          uniqueName: "skin-care",
          image: "/images/categories/skin-care.jpg",
          displayOrder: 3,
          // seo: {},
        },
        // {
        //   name_en: "Health Care",
        //   name_ar: "العناية بالصحة",
        //   uniqueName: "health-care",
        //   image: "",
        //   displayOrder: 4,
        //   // seo: {},
        // },
      ],
    },
    {
      id: uniqueId(),
      name_en: "Cleaning",
      name_ar: "التنظيف",
      uniqueName: "cleaning",
      image: "/images/categories/cleaning.jpg",
      displayOrder: 4,
      // seo: {},
      children: [
        {
          id: uniqueId(),
          name_en: "Toilet Paper",
          name_ar: "ورق الحمام",
          uniqueName: "toilet-paper",
          image: "/images/categories/toilet-paper.jpg",
          displayOrder: 1,
          // seo: {},
        },
        {
          id: uniqueId(),
          name_en: "Toilet Cleaning",
          name_ar: "منظفات الحمام",
          uniqueName: "toilet-cleaning",
          image: "/images/categories/toilet-clean.jpg",
          displayOrder: 2,
          // seo: {},
        },
        //   {
        //     name_en: "Kitchen Cleaning",
        //     name_ar: "منظفات المطبخ",
        //     uniqueName: "kitchen-cleaning",
        //     image: "",
        //     displayOrder: 3,
        //     // seo: {},
        //   },
        //   {
        //     name_en: "handwash",
        //     name_ar: "غسيل الايدي",
        //     uniqueName: "handwash",
        //     image: "",
        //     displayOrder: 4,
        //     // seo: {},
        //   },
      ],
    },
    {
      id: uniqueId(),
      name_en: "Household Appliances",
      name_ar: "مستلزمات المنزل",
      uniqueName: "household-appliances",
      image: "/images/categories/household.jpg",
      displayOrder: 5,
      // seo: {},
      children: [
        {
          id: uniqueId(),
          name_en: "Cookware",
          name_ar: "معدات الطبخ",
          uniqueName: "cookware",
          image: "/images/categories/cookware.jpg",
          displayOrder: 1,
          // seo: {},
        },
        // {
        //   name_en: "Bakeware",
        //   name_ar: "معدات الخبز",
        //   uniqueName: "bakeware",
        //   image: "",
        //   displayOrder: 2,
        //   // seo: {},
        // },
        // {
        //   name_en: "Kitchen Storage",
        //   name_ar: "تخزين منزلي",
        //   uniqueName: "kitchen-storage",
        //   image: "",
        //   displayOrder: 3,
        //   // seo: {},
        // },
        {
          id: uniqueId(),
          name_en: "Electronic Appliance",
          name_ar: "مستلزمات الكترونية",
          uniqueName: "electronic-appliance",
          image: "/images/categories/electronic.jpg",
          displayOrder: 4,
          // seo: {},
        },
      ],
    },
  ],
  products: [
    {
      id: uniqueId(),
      uniqueName: "tefal-cook-natural-cooking-set_black",
      name_en: "Tefal Cook Natural Cooking Set-black",
      name_ar: "طقم طهي تيفال كوك ناتشورال",
      attributes: {
        name: "",
        value: "",
        uniqueName: "",
      },
      color: "black",
      modelNumber: "01",
      serialNumber: "4300007505",
      sizes: [],
      weight: "",
      seo: {},
      brand_en: "Cook Natural",
      brand_ar: "كوك ناتشورال",
      brandUniueName: "cook-natural",
      categoryName_en: "Cookware",
      categoryName_ar: "أدوات الطبخ",
      categoryUniqueName: "cookware",
      images: [
        {
          imageAcutal: "/images/products/p-1.webp",
          imageThumb: "/images/products/p-1.webp",
          imageMedium: "",
          prime: true,
          type: "",
        },
        {
          imageAcutal: "/images/products/p-2.webp",
          imageThumb: "/images/products/p-2.webp",
          imageMedium: "",
          prime: true,
          type: "",
        },
      ],
      description_en: "High quality and long-lasting performance",
      description_ar: "طزجاجودة عالية وأداء يدوم طويلًا بفضل طبقة",
      Price: "3838",
      priceAfterDiscount: "",
      discountType: "percent", // "amount"
      discount: "",
      availability: false,
      isFeatured: "20% OFF",
    },
    {
      id: uniqueId(),
      uniqueName: "tefal-cook-natural-cooking-set_red",
      name_en: "Tefal Cook Natural Cooking Set-red",
      name_ar: "طقم طهي تيفال كوك ناتشورال",
      attributes: {
        name: "",
        value: "",
        uniqueName: "",
      },
      color: "red",
      modelNumber: "01",
      serialNumber: "4300007505",
      sizes: [],
      weight: "",
      seo: {},
      brand_en: "Cook Natural",
      brand_ar: "كوك ناتشورال",
      brandUniueName: "cook-natural",
      categoryName_en: "Cookware",
      categoryName_ar: "أدوات الطبخ",
      categoryUniqueName: "cookware",
      images: [
        {
          imageAcutal: "/images/products/p-2.webp",
          imageThumb: "/images/products/p-2.webp",
          imageMedium: "",
          prime: true,
          type: "",
        },
        {
          imageAcutal: "/images/products/p-1.webp",
          imageThumb: "/images/products/p-1.webp",
          imageMedium: "",
          prime: true,
          type: "",
        },
      ],
      description_en: "High quality and long-lasting performance",
      description_ar: "طزجاجودة عالية وأداء يدوم طويلًا بفضل طبقة",
      Price: "3838",
      priceAfterDiscount: "",
      discountType: "percent", // "amount"
      discount: "",
      availability: false,
      isFeatured: "20% OFF",
    }
    ,
    {
      id: uniqueId(),
      uniqueName: "tefal-cook-natural-fryapn-set",
      name_en: "Tefal Cook Natural Fryapn Set",
      name_ar: "طقم مقلاة تيفال كوك ناتشورال",
      attributes: {
        name: "",
        value: "",
        uniqueName: "",
      },
      color: "black",
      modelNumber: "02",
      serialNumber: "4300007512",
      sizes: [22, 24],
      weight: "",
      seo: {},
      brand_en: "Cook Natural",
      brand_ar: "كوك ناتشورال",
      brandUniueName: "cook-natural",
      categoryName_en: "Cookware",
      categoryName_ar: "أدوات الطبخ",
      categoryUniqueName: "cookware",
      images: [
        {
          imageAcutal: "/images/products/p1.png",
          imageThumb: "/images/products/mug.jpg",
          imageMedium: "",
          prime: true,
          type: "",
        },
        {
          imageAcutal: "/images/products/p2.jpg",
          imageThumb: "/images/products/mug.jpg",
          imageMedium: "",
          prime: true,
          type: "",
        },
      ],
      description_en: "High quality and long-lasting performance thanks",
      description_ar: " المقاومة للالتصاق المصنوعة في فرنساطهي مثالي",
      Price: "813",
      priceAfterDiscount: "499",
      discountType: "amount", // "amount"
      discount: "50",
      availability: true,
      isFeatured: "",
    },
    {
      id: uniqueId(),
      uniqueName: "molonix-vitapress-juicer",
      name_en: "Molonix Vitapress Juicer",
      name_ar: "عصارة فيتابريس من مولونيكس",
      attributes: {
        name: "",
        value: "",
        uniqueName: "",
      },
      color: "",
      model: "",
      serialNumber: "1510001956",
      sizes: [],
      weight: "",
      seo: {},
      brand_en: "Juice Maker",
      brand_ar: "عصارة",
      brandUniueName: "juice-maker",
      categoryName_en: "Home Appliances",
      categoryName_ar: "أجهزة منزلية",
      categoryUniqueName: "home-appliances",
      images: [
        {
          imageAcutal: "/images/products/p2.jpg",
          imageThumb: "/images/products/p2.jpg",
          imageMedium: "",
          prime: true,
          type: "",
        },
        {
          imageAcutal: "/images/products/p3.jpg",
          imageThumb: "/images/products/p3.jpg",
          imageMedium: "",
          prime: true,
          type: "",
        },
      ],
      description_en: "XXL 1 L capacity that’s ideal for any occasion.",
      description_ar: "سعة كبيرة XXL 1 لتر مثالية لأي مناسبة.",
      Price: "899",
      priceAfterDiscount: "355",
      discountType: "percent", // "amount"
      discount: "25",
      availability: false,
      isFeatured: "25% OFF",
    },
    {
      id: uniqueId(),
      uniqueName: "Tefal-Silence-Force-Wall-Fan",
      name_en: "Tefal Silence Force Wall Fan",
      name_ar: "   مروحة حائط تيفال سايلنس فورس",
      attributes: {
        name: "",
        value: "",
        uniqueName: "",
      },
      color: "black",
      modelNumber: "03",
      serialNumber: "4300007113",
      sizes: [],
      weight: "4.6",
      seo: {},
      brand_en: "tefal",
      brand_ar: "تيفال",
      brandUniueName: "tefal",
      categoryName_en: "Home Appliances",
      categoryName_ar: "أجهزة منزلية",
      categoryUniqueName: "home-appliances",
      images: [
        {
          imageAcutal: "/images/products/fan.jpg",
          imageThumb: "/images/products/fan.jpg",
          imageMedium: "",
          prime: true,
          type: "",
        },
        {
          imageAcutal: "/images/products/fan.jpg",
          imageThumb: "/images/products/fan.jp",
          imageMedium: "",
          prime: true,
          type: "",
        },
      ],
      description_en:
        "+30% Powerful Airflow with 6 blades combined to aerodynamic",
      description_ar:
        "+ 30٪ تدفق هواء قوي مع 6 شفرات مجتمعة مع الديناميكية الهوائية",
      Price: "799",
      priceAfterDiscount: "",
      discountType: "percent", // "amount"
      discount: "",
      availability: true,
      isFeatured: "",
    },
    {
      id: uniqueId(),
      uniqueName: "Tefal-Pizza-Tray",
      name_en: "Tefal Pizza Tray",
      name_ar: "  صينية بيتزا تيفال",
      attributes: {
        name: "",
        value: "",
        uniqueName: "",
      },
      color: "red",
      modelNumber: "04",
      serialNumber: "4300000957",
      sizes: [23, 27, 30, 33],
      weight: "4.6",
      seo: {},
      brand_en: "tefal3",
      brand_ar: "3تيفال",
      brandUniueName: "tefal3",
      categoryName_en: "Cookware",
      categoryName_ar: " معدات الطبخ",
      categoryUniqueName: "cookware",
      images: [
        {
          imageAcutal: "/images/products/pan.jpg",
          imageThumb: "/images/products/pan.jpg",
          imageMedium: "",
          prime: true,
          type: "",
        },
        {
          imageAcutal: "/images/products/pan.jpg",
          imageThumb: "/images/products/pan.jpg",
          imageMedium: "",
          prime: true,
          type: "",
        },
      ],
      description_en:
        "Long-lasting performance thanks to durable non-stick coated in France.",
      description_ar: " أداء طويل الأمد بفضل طلاء متين غير لاصق في فرنسا.",
      Price: "269",
      priceAfterDiscount: "",
      discountType: "percent", // "amount"
      discount: "",
      availability: false,
      isFeatured: "",
    },
    {
      id: uniqueId(),
      uniqueName: "Moulinex-Double-Force-Food-Processor",
      name_en: "Moulinex Double Force Food Processor",
      name_ar: "    محضر طعام مولينكس دبل فورس",
      attributes: {
        name: "",
        value: "",
        uniqueName: "",
      },
      color: "red",
      modelNumber: "05",
      serialNumber: "4300005867",
      sizes: [],
      weight: "4.6",
      seo: {},
      brand_en: "zahran2",
      brand_ar: "زهران2",
      brandUniueName: "zahran2",
      categoryName_en: "Cookware",
      categoryName_ar: " معدات الطبخ",
      categoryUniqueName: "cookware",
      images: [
        {
          imageAcutal: "/images/products/col.png",
          imageThumb: "/images/products/col.png",
          imageMedium: "",
          prime: true,
          type: "",
        },
        {
          imageAcutal: "/images/products/col.png",
          imageThumb: "/images/products/col.png",
          imageMedium: "",
          prime: true,
          type: "",
        },
      ],
      description_en:
        "Optimal speed and spinning force with the 2 different motor outputs.",
      description_ar: "السرعة المثلى وقوة الدوران مع مخرجين مختلفين للمحرك.",
      Price: "3099",
      priceAfterDiscount: "",
      discountType: "percent", // "amount"
      discount: "",
      availability: true,
      isFeatured: "",
    },
    {
      id: uniqueId(),
      uniqueName: "Tefal-Travel-Mug",
      name_en: "Tefal Travel Mug ",
      name_ar: "    كوب السفر من تيفال",
      attributes: {
        name: "",
        value: "",
        uniqueName: "",
      },
      color: "black",
      modelnumber: "06",
      serialNumber: "3100517970",
      sizes: [],
      weight: "0.394",
      seo: {},
      brand_en: "tefal",
      brand_ar: "تيفال",
      brandUniueName: "tefal",
      categoryName_en: "Home Appliances",
      categoryName_ar: "أجهزة منزلية",
      categoryUniqueName: "home-appliances",
      images: [
        {
          imageAcutal: "/images/products/mug.jpg",
          imageThumb: "/images/products/mug.jpg",
          imageMedium: "",
          prime: true,
          type: "",
        },
        {
          imageAcutal: "/images/products/mug.jpg",
          imageThumb: "/images/products/mug.jpg",
          imageMedium: "",
          prime: true,
          type: "",
        },
      ],
      description_en:
        "Take your mug on the go without worrying about leaks as it is 100% leakproof.",
      description_ar:
        "خذ الكوب الخاص بك أثناء التنقل دون القلق بشأن التسرب لأنه مقاوم للتسرب بنسبة 100٪.",
      Price: "559",
      priceAfterDiscount: "",
      discountType: "percent", // "amount"
      discount: "",
      availability: false,
      isFeatured: "",
    },
  ],
  marqueeAds: [
    {
      id: uniqueId(),
      text_en: "Zahran market coming soon!",
      text_ar: "زهران ماركت انتظرونا قريبا!",
      displayOrder: 1,
    },
    {
      id: uniqueId(),
      text_en: "Zahran market coming soon!",
      text_ar: "زهران ماركت انتظرونا قريبا!",
      displayOrder: 2,
    },
    {
      id: uniqueId(),
      text_en: "Zahran market coming soon!",
      text_ar: "زهران ماركت انتظرونا قريبا!",
      displayOrder: 2,
    },
  ],
  topCategories: [
    {
      id: uniqueId(),
      name_en: "Grocery",
      name_ar: "البقالة",
      uniqueName: "grocery",
      image: "/images/categories/grocery.jpg",
      displayOrder: 1,
    },
    {
      id: uniqueId(),
      name_en: "Beverages",
      name_ar: "المشروبات",
      uniqueName: "beverages",
      image: "/images/categories/beverages.jpg",
      displayOrder: 2,
    },
    {
      id: uniqueId(),
      name_en: "Beauty",
      name_ar: "الجمال",
      uniqueName: "beauty",
      image: "/images/categories/beauty.jpg",
      displayOrder: 3,
    },
    {
      id: uniqueId(),
      name_en: "Cleaning",
      name_ar: "التنظيف",
      uniqueName: "cleaning",
      image: "/images/categories/cleaning.jpg",
      displayOrder: 4,
    },
    {
      id: uniqueId(),
      name_en: "Household Appliances",
      name_ar: "مستلزمات المنزل",
      uniqueName: "household-appliances",
      image: "/images/categories/household.jpg",
      displayOrder: 5,
    },
  ],
  brands: [
    {
      id: uniqueId(),
      image: "/images/brands/brand.webp",
      uniqueName: "zahran",
      name_en: "zahran",
      name_ar: "زهران",
    },
    {
      id: uniqueId(),
      image: "/images/brands/brand.webp",
      uniqueName: "tefal",
      name_en: "tefal",
      name_ar: "تيفال",
    },
    {
      id: uniqueId(),
      image: "/images/brands/brand.webp",
      uniqueName: "zahran2",
      name_en: "zahran2",
      name_ar: "زهران 2",
    },
    {
      id: uniqueId(),
      image: "/images/brands/brand.webp",
      uniqueName: "tefal2",
      name_en: "tefal2",
      name_ar: "2 تيفال",
    },
    {
      id: uniqueId(),
      image: "/images/brands/brand.webp",
      uniqueName: "zahran3",
      name_en: "zahran3",
      name_ar: "زهران 3",
    },
    {
      id: uniqueId(),
      image: "/images/brands/brand.webp",
      uniqueName: "zahran4",
      name_en: "zahran4",
      name_ar: "زهران 4",
    },
  ],
  bannersHome: [
    {
      id: uniqueId(),
      image: "/images/banners-home/banner-1360x250.jpg",
      uniqueName: "zahran-offer",
      name_en: "zahran offer",
      name_ar: "عروض زهران ",
    },
    {
      id: uniqueId(),
      image: "/images/banners-home/banner-1360x250.jpg",
      uniqueName: "zahran-offer2",
      name_en: "zahran offer2",
      name_ar: "عروض زهران 2 ",
    },
  ],
  category: [
    {
      id: uniqueId(),
      image: "/images/banners-home/banner-1360x250.jpg",
      uniqueName: "zahran-offer",
      name_en: "zahran offer",
      name_ar: "عروض زهران ",
      brandsCatogery: [
        {
          id: uniqueId(),
          image: "/images/products/prod-1.webp",
          uniqueName: "zahran-tefal",
          name_en: "zahran tefal",
          name_ar: "زهران تيفال",
        },
        {
          id: uniqueId(),
          image: "/images/products/prod-2.webp",
          uniqueName: "zahran-tefal",
          name_en: "zahran tefal",
          name_ar: "زهران تيفال",
        },
        {
          id: uniqueId(),
          image: "/images/products/prod-3.webp",
          uniqueName: "zahran-tefal",
          name_en: "zahran tefal",
          name_ar: "زهران تيفال",
        },
        {
          id: uniqueId(),
          image: "/images/brands/brand.webp",
          uniqueName: "zahran-tefal",
          name_en: "zahran tefal",
          name_ar: "زهران تيفال",
        },
        {
          id: uniqueId(),
          image: "/images/brands/brand.webp",
          uniqueName: "zahran-tefal",
          name_en: "zahran tefal",
          name_ar: "زهران تيفال",
        },
        {
          id: uniqueId(),
          image: "/images/brands/brand.webp",
          uniqueName: "zahran-tefal",
          name_en: "zahran tefal",
          name_ar: "زهران تيفال",
        },
      ],
    },
    {
      id: uniqueId(),
      image: "/images/banners-home/banner-1360x250.jpg",
      uniqueName: "zahran-offer",
      name_en: "zahran offer",
      name_ar: "عروض زهران ",
      brandsCatogery: [
        {
          id: uniqueId(),
          image: "/images/products/prod-1.webp",
          uniqueName: "zahran-tefal",
          name_en: "zahran tefal",
          name_ar: "زهران تيفال",
        },
        {
          id: uniqueId(),
          image: "/images/products/prod-2.webp",
          uniqueName: "zahran-tefal",
          name_en: "zahran tefal",
          name_ar: "زهران تيفال",
        },
        {
          id: uniqueId(),
          image: "/images/products/prod-3.webp",
          uniqueName: "zahran-tefal",
          name_en: "zahran tefal",
          name_ar: "زهران تيفال",
        },
        {
          id: uniqueId(),
          image: "/images/brands/brand.webp",
          uniqueName: "zahran-tefal",
          name_en: "zahran tefal",
          name_ar: "زهران تيفال",
        },
        {
          id: uniqueId(),
          image: "/images/brands/brand.webp",
          uniqueName: "zahran-tefal",
          name_en: "zahran tefal",
          name_ar: "زهران تيفال",
        },
        {
          id: uniqueId(),
          image: "/images/brands/brand.webp",
          uniqueName: "zahran-tefal",
          name_en: "zahran tefal",
          name_ar: "زهران تيفال",
        },
      ],
    },
  ],
  category2: [
    {
      id: uniqueId(),
      image: "/images/banners-home/banner-1360x250.jpg",
      uniqueName: "zahran-offer",
      name_en: "zahran offer",
      name_ar: "عروض زهران ",
      brandsCatogery2: [
        {
          id: uniqueId(),
          image: "/images/products/prod-1.webp",
          uniqueName: "zahran-tefal",
          name_en: "zahran tefal",
          name_ar: "زهران تيفال",
        },
        {
          id: uniqueId(),
          image: "/images/products/prod-2.webp",
          uniqueName: "zahran-tefal",
          name_en: "zahran tefal",
          name_ar: "زهران تيفال",
        },
        {
          id: uniqueId(),
          image: "/images/products/prod-3.webp",
          uniqueName: "zahran-tefal",
          name_en: "zahran tefal",
          name_ar: "زهران تيفال",
        },
        {
          id: uniqueId(),
          image: "/images/brands/brand.webp",
          uniqueName: "zahran-tefal",
          name_en: "zahran tefal",
          name_ar: "زهران تيفال",
        },
        {
          id: uniqueId(),
          image: "/images/brands/brand.webp",
          uniqueName: "zahran-tefal",
          name_en: "zahran tefal",
          name_ar: "زهران تيفال",
        },
        {
          id: uniqueId(),
          image: "/images/brands/brand.webp",
          uniqueName: "zahran-tefal",
          name_en: "zahran tefal",
          name_ar: "زهران تيفال",
        },
      ],
    },
  ],
  magazineSec: {
    id: uniqueId(),
    image: "/images/banners-home/banner-1360x250.jpg",
    uniqueName: "zahran-offer",
    name_en: "zahran offer",
    name_ar: "عروض زهران ",
  },
};

export default data;
