const uniqueId = () => Math.random().toString(16).slice(2);

const data = {
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
      uniqueName: "Zizinia-34-ahmed-yehia-street",
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
      name_en:
        "Kerir: Sidi Kerir Military Village",
      name_ar:
        "كرير : قرية سيدى كرير العسكرية الكيلو 32.5",
      cityUniqueName: "alexandria-and-the-north-coast",
    },
    {
      id: uniqueId(),
      uniqueName: "badr-badr-village",
      name_en:
        "Badr: Badr Village - Kilo 82.5",
      name_ar:
        "بدر : قرية بدر – كيلو 82.5",
      cityUniqueName: "alexandria-and-the-north-coast",
    },
    {
      id: uniqueId(),
      uniqueName: "marina-champs-elysees-market-marina",
      name_en:
        "Marina: Champs Elysees Market - Marina",
      name_ar:
        "ماريــــنا : سوق الشانزلــــيزية - ماريـــــنا",
      cityUniqueName: "alexandria-and-the-north-coast",
    },
    {
      id: uniqueId(),
      uniqueName: "saad-zaghloul-street-manshiet-abaza",
      name_en:
        "Saad Zaghloul Street, Manshiet Abaza",
      name_ar:
        "شارع سعد زغلول، منشية أباظة",
      cityUniqueName: "zagazig",
    },
    {
      id: uniqueId(),
      uniqueName: "the-intersection-of-mohamed-saeed",
      name_en:
        "the intersection of Mohamed Saeed Al Arab Street and Al Ma'hada Street",
      name_ar:
        "تقاطع شارع محمد سعيد العرب و شارع المعاهدة",
      cityUniqueName: "tanta",
    },
    {
      id: uniqueId(),
      uniqueName: "41-army-road-next-to-egyptair-office",
      name_en:
        "41 Army Road - next to EgyptAir office",
      name_ar:
        "41 طريق الجيش - بجوار مكتب مصر للطيران",
      cityUniqueName: "mansoura",
    },
    {
      id: uniqueId(),
      uniqueName: "royal-plaza-tower-el-galaa-st",
      name_en:
        "Royal Plaza Tower - El-Galaa St.",
      name_ar:
        "برج رويال بلازا – ش الجلاء",
      cityUniqueName: "mahalla",
    },
    {
      id: uniqueId(),
      uniqueName: "gamal-abdel-nasser-street-central-district-city-grand-mall",
      name_en:
        "Gamal Abdel Nasser Street - Central District",
      name_ar:
        "دمياط الجديدة : شارع جمال عبد الناصر – المنطقه المركزيه",
      cityUniqueName: "new-damietta",
    },
  ],
};

export default data;
