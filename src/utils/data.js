const uniqueId = () => Math.random().toString(16).slice(2);

const data = {
  branches: [
    {
      id: uniqueId(),
      name_en: "Smouha",
      name_ar: "سموحة",
      uniqueName: "smouha",
      area: "smouha-31-victor-emmanuel-street",
    },
    {
      id: uniqueId(),
      name_en: "Zizinia",
      name_ar: "زيزينيا",
      uniqueName: "zizinia",
      area: "zizinia-34-ahmed-yehia-street",
    },
    {
      id: uniqueId(),
      name_en: "Al-Mamoura",
      name_ar: "المعمورة",
      uniqueName: "al-mamoura",
      area: "al-mamoura-1-al-nasr-street-al-maamoura-al-shati",
    },
    {
      id: uniqueId(),
      name_en: "Al-Ajami",
      name_ar: "العجمى",
      uniqueName: "al-ajami",
      area: "al-ajami-shahr-al-asal-street-al-bitash",
    },
    {
      id: uniqueId(),
      name_en: "Kerir",
      name_ar: "كرير",
      uniqueName: "kerir",
      area: "kerir-sidi-kerir-military-village",
    },
    {
      id: uniqueId(),
      name_en: "Badr",
      name_ar: "بدر",
      uniqueName: "badr",
      area: "badr-badr-village",
    },
    {
      id: uniqueId(),
      name_en: "Marina",
      name_ar: "ماريــــنا",
      uniqueName: "marina",
      area: "marina-champs-elysees-market-marina",
    },
    {
      id: uniqueId(),
      name_en: "Saad Zaghloul Street",
      name_ar: "شارع سعد زغلول",
      uniqueName: "saad-zaghloul-street",
      area: "saad-zaghloul-street-manshiet-abaza",
    },
    {
      id: uniqueId(),
      name_en: "the intersection of Mohamed Saeed",
      name_ar: "تقاطع شارع محمد سعيد",
      uniqueName: "the-intersection-of-mohamed-saeed-branch",
      area: "the-intersection-of-mohamed-saeed",
    },
    {
      id: uniqueId(),
      name_en: "41 Army Road",
      name_ar: "41 طريق الجيش",
      uniqueName: "41-army-road",
      area: "41-army-road-next-to-egyptair-office",
    },
    {
      id: uniqueId(),
      name_en: "Royal Plaza Tower",
      name_ar: "برج رويال بلازا",
      uniqueName: "royal-plaza-tower",
      area: "royal-plaza-tower-el-galaa-st",
    },
    {
      id: uniqueId(),
      name_en: "New Damietta",
      name_ar: "دمياط الجديدة",
      uniqueName: "new-damietta",
      area: "new-damietta-gamal-abdel-nasser-street-central-district-city-grand-mall",
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
  categories: [
    {
      name_en: "Grocery",
      name_ar: "البقالة",
      uniqueName: "grocery",
      image: "/images/categories/grocery.jpg",
      displayOrder: 1,
      // seo: {},
      children: [
        {
          name_en: "Cheese",
          name_ar: "الجبن",
          uniqueName: "cheese",
          image: "/images/categories/cheese.jpg",
          displayOrder: 1,
          // seo: {},
        },
        {
          name_en: "Dry Food",
          name_ar: "الاطعمة الجافة",
          uniqueName: "dry-food",
          image: "/images/categories/dry-food.jpg",
          displayOrder: 2,
          // seo: {},
        },
        {
          name_en: "Candy & Chocolate",
          name_ar: "الحلويات و الشيكولاته",
          uniqueName: "candy-chocolate",
          image: "/images/categories/chocolate.jpg",
          displayOrder: 3,
          // seo: {},
        },
        {
          name_en: "Rice & Grains",
          name_ar: "الارز و الحبوب",
          uniqueName: "rice-grains",
          image: "/images/categories/rice-grains.jpg",
          displayOrder: 4,
          // seo: {},
        },
        {
          name_en: "Pasta & Noodles",
          name_ar: "المكرونة",
          uniqueName: "pasta-noodles",
          image: "/images/categories/pasta.jpg",
          displayOrder: 5,
          // seo: {},
        },
        {
          name_en: "Canned Food",
          name_ar: "الاطعمه المعلبة",
          uniqueName: "canned-food",
          image: "/images/categories/canned-food.jpg",
          displayOrder: 6,
          // seo: {},
        },
        {
          name_en: "Oil",
          name_ar: "الزيوت",
          uniqueName: "oil",
          image: "/images/categories/oil.jpg",
          displayOrder: 7,
          // seo: {},
        },
        {
          name_en: "Fruits",
          name_ar: "الفواكة",
          uniqueName: "fruits",
          image: "/images/categories/fruits.jpg",
          displayOrder: 8,
          // seo: {},
        },
        {
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
      name_en: "Beverages",
      name_ar: "المشروبات",
      uniqueName: "beverages",
      image: "/images/categories/beverages.jpg",
      displayOrder: 2,
      // seo: {},
      children: [
        {
          name_en: "Mineral Water",
          name_ar: "المياه المعدنيه",
          uniqueName: "mineral-water",
          image: "/images/categories/water.jpg",
          displayOrder: 1,
          // seo: {},
        },
        {
          name_en: "Juices",
          name_ar: "العصائر",
          uniqueName: "juices",
          image: "/images/categories/juices.jpg",
          displayOrder: 2,
          // seo: {},
        },
        {
          name_en: "Soft Drinks",
          name_ar: "المشروبات الغازية",
          uniqueName: "soft-drinks",
          image: "/images/categories/soft-drinks.jpg",
          displayOrder: 3,
          // seo: {},
        },
        {
          name_en: "Tea",
          name_ar: "الشاي",
          uniqueName: "tea",
          image: "/images/categories/tea.jpg",
          displayOrder: 4,
          // seo: {},
        },
        {
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
      name_en: "Beauty",
      name_ar: "الجمال",
      uniqueName: "beauty",
      image: "/images/categories/beauty.jpg",
      displayOrder: 3,
      // seo: {},
      children: [
        {
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
      name_en: "Cleaning",
      name_ar: "التنظيف",
      uniqueName: "cleaning",
      image: "/images/categories/cleaning.jpg",
      displayOrder: 4,
      // seo: {},
      children: [
        {
          name_en: "Toilet Paper",
          name_ar: "ورق الحمام",
          uniqueName: "toilet-paper",
          image: "/images/categories/toilet-paper.jpg",
          displayOrder: 1,
          // seo: {},
        },
        {
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
      name_en: "Household Appliances",
      name_ar: "مستلزمات المنزل",
      uniqueName: "household-appliances",
      image: "/images/categories/household.jpg",
      displayOrder: 5,
      // seo: {},
      children: [
        {
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
      uniqueName: "",
      name_en: "",
      name_ar: "",
      attributes: {
        name: "",
        value: "",
        uniqueName: "",
      },
      color: "",
      model: "",
      serialNumber: "",
      sizes: [],
      weight: "",
      seo: {},
      brand_en: "",
      brand_ar: "",
      brandUniueName: "",
      categoryName_en: "",
      categoryName_ar: "",
      categoryUniqueName: "",
      images: [
        {
          imageAcutal: "",
          imageThumb: "",
          imageMedium: "",
          prime: true,
          type: "",
        },
      ],
      description_en: "",
      description_ar: "",
      Price: "",
      priceAfterDiscount: "",
      discountType: "percent", // "amount"
      discount: "20",
      availability: true,
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
};

export default data;