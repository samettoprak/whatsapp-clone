const messageData = {
  groups: [
    {
      group_name: "Aile Grubu",
      participants: ["Anne", "Baba", "Kardeş"],
      messages: [
        {
          sender: "Anne",
          content: "Herkese günaydın!",
          timestamp: "2023-06-11 08:00:00",
        },
        {
          sender: "Anne",
          content: "Naber",
          timestamp: "2023-06-11 08:00:00",
        },
        {
          sender: "Anne",
          content: "?",
          timestamp: "2023-06-11 08:00:00",
        },

        {
          sender: "Baba",
          content: "Günaydın",
          timestamp: "2023-06-11 08:01:00",
        },
        {
          sender: "Baba",
          content: "Nasılsınız?",
          timestamp: "2023-06-11 08:01:00",
        },
        {
          sender: "Kardeş",
          content: "Ben de iyiyim, teşekkürler.",
          timestamp: "2023-06-11 08:02:00",
        },
        {
          sender: "Anne",
          content: "Bugün akşam yemeği için ne pişirelim?",
          timestamp: "2023-06-11 08:03:00",
        },
        {
          sender: "Baba",
          content: "Belki pizza söyleyebiliriz.",
          timestamp: "2023-06-11 08:04:00",
        },
        {
          sender: "Kardeş",
          content: "Pizza iyi fikir, ben de pizza istiyorum!",
          timestamp: "2023-06-11 08:05:00",
        },
        {
          sender: "Anne",
          content: "Tamam, o zaman akşam pizza söyleyelim.",
          timestamp: "2023-06-11 08:06:00",
        },
        {
          sender: "Baba",
          content: "Hepinize katılıyorum, pizza harika olacak!",
          timestamp: "2023-06-11 08:07:00",
        },
        {
          sender: "Anne",
          content: "Hangi pizzayı tercih edersiniz? Mozarella mı, sucuklu mu?",
          timestamp: "2023-06-11 08:08:00",
        },
        {
          sender: "Baba",
          content: "Benim tercihim mozarella, siz ne dersiniz?",
          timestamp: "2023-06-11 08:09:00",
        },
        {
          sender: "Kardeş",
          content: "Sucuklu da güzel olabilir, karar veremiyorum.",
          timestamp: "2023-06-11 08:10:00",
        },
        {
          sender: "Anne",
          content:
            "Öyleyse ikiye bölelim. Yarısı mozarella, yarısı sucuklu olsun.",
          timestamp: "2023-06-11 08:11:00",
        },
        {
          sender: "Baba",
          content: "Harika bir plan! İki farklı lezzeti deneyebiliriz.",
          timestamp: "2023-06-11 08:12:00",
        },
      ],
    },
    {
      group_name: "Okul Projesi",
      participants: ["Ahmet", "Mehmet", "Ayşe", "Fatma"],
      messages: [
        {
          sender: "Ahmet",
          content:
            "Arkadaşlar, projenin son teslim tarihini hatırlatayım: 15 Haziran.",
          timestamp: "2023-06-10 15:00:00",
        },
        {
          sender: "Ayşe",
          content: "Evet, son düzenlemeleri yapmamız gerekiyor.",
          timestamp: "2023-06-10 15:02:00",
        },
        {
          sender: "Mehmet",
          content: "Benim bölümümü tamamladım, kontrol edebilirsiniz.",
          timestamp: "2023-06-10 15:03:00",
        },
        {
          sender: "Fatma",
          content:
            "Ben de grafikleri hazırlıyorum, en kısa sürede tamamlayacağım.",
          timestamp: "2023-06-10 15:05:00",
        },
        {
          sender: "Ahmet",
          content:
            "Harika, projeyi tamamladığımızda sunum için bir toplantı yapalım.",
          timestamp: "2023-06-10 15:07:00",
        },
      ],
    },
    {
      group_name: "Spor Takımı",
      participants: ["Ali", "Veli", "Ahmet", "Mehmet"],
      messages: [
        {
          sender: "Ali",
          content: "Antrenman saatleri değişti, herkesin bilgisine.",
          timestamp: "2023-06-09 18:00:00",
        },
      ],
    },
    {
      group_name: "Üniversite Arkadaşları",
      participants: ["Ali", "Veli", "Ayşe", "Mehmet"],
      messages: [
        {
          sender: "Ali",
          content: "Selam arkadaşlar, buluşmak için bir plan yapalım mı?",
          timestamp: "2023-06-15 14:30:00",
        },
        {
          sender: "Ayşe",
          content: "Tabii, nerede buluşalım?",
          timestamp: "2023-06-15 14:31:00",
        },
        {
          sender: "Mehmet",
          content: "Parkta buluşabiliriz.",
          timestamp: "2023-06-15 14:32:00",
        },
        {
          sender: "Veli",
          content: "Ne zaman buluşalım?",
          timestamp: "2023-06-15 14:33:00",
        },
        {
          sender: "Ali",
          content: "Öğleden sonra saat 15:00 gibi uygun olabilir mi?",
          timestamp: "2023-06-15 14:34:00",
        },
      ],
    },
    {
      group_name: "Müzik Kulübü",
      participants: ["Ece", "Deniz", "Can", "Selin"],
      messages: [
        {
          sender: "Deniz",
          content:
            "Arkadaşlar, haftaya konserimiz var. Son provamızı yapmamız lazım.",
          timestamp: "2023-06-14 17:00:00",
        },
        {
          sender: "Can",
          content: "Konser için hangi şarkıları çalacağız?",
          timestamp: "2023-06-14 17:01:00",
        },
        {
          sender: "Ece",
          content: "Listede Beatles ve Queen şarkıları var.",
          timestamp: "2023-06-14 17:02:00",
        },
        {
          sender: "Selin",
          content: "Ben davulda olacağım, diğer enstrümanları kim çalacak?",
          timestamp: "2023-06-14 17:03:00",
        },
        {
          sender: "Deniz",
          content: "Ece gitar, Can klavye çalacak.",
          timestamp: "2023-06-14 17:04:00",
        },
      ],
    },
    {
      group_name: "Gezi Planlama",
      participants: ["Ahmet", "Mehmet", "Ayşe", "Fatma"],
      messages: [
        {
          sender: "Ahmet",
          content: "Arkadaşlar, yaz tatili için nereye gitsek?",
          timestamp: "2023-06-13 11:00:00",
        },
        {
          sender: "Mehmet",
          content: "Bodrum güzel olabilir.",
          timestamp: "2023-06-13 11:01:00",
        },
        {
          sender: "Ayşe",
          content: "Antalya da düşünebiliriz.",
          timestamp: "2023-06-13 11:02:00",
        },
        {
          sender: "Fatma",
          content: "İzmir'i de değerlendirelim.",
          timestamp: "2023-06-13 11:03:00",
        },
        {
          sender: "Ahmet",
          content: "O zaman Bodrum ve Antalya'yı araştıralım, karar verelim.",
          timestamp: "2023-06-13 11:04:00",
        },
      ],
    },
    {
      group_name: "Kitap Kulübü",
      participants: ["Elif", "Merve", "Ali", "Deniz"],
      messages: [
        {
          sender: "Elif",
          content: "Arkadaşlar, bu ay için hangi kitabı okuyalım?",
          timestamp: "2023-06-12 09:00:00",
        },
        {
          sender: "Merve",
          content: "Önerileriniz neler?",
          timestamp: "2023-06-12 09:01:00",
        },
        {
          sender: "Deniz",
          content: "Bir klasik okuyalım, Ölü Canlar olabilir.",
          timestamp: "2023-06-12 09:02:00",
        },
        {
          sender: "Ali",
          content: "Ben de aynı fikirdeyim, Ölü Canlar'ı okuyalım.",
          timestamp: "2023-06-12 09:03:00",
        },
        {
          sender: "Elif",
          content:
            "Anlaştık, Ölü Canlar'ı okuyalım ve gelecek hafta tartışalım.",
          timestamp: "2023-06-12 09:04:00",
        },
      ],
    },
    {
      group_name: "Film Kulübü",
      participants: ["Ali", "Veli", "Ayşe", "Mehmet"],
      messages: [
        {
          sender: "Veli",
          content: "Arkadaşlar, bu hafta film önerileriniz neler?",
          timestamp: "2023-06-11 20:00:00",
        },
        {
          sender: "Ayşe",
          content: "Dram türünde bir film izleyebiliriz.",
          timestamp: "2023-06-11 20:01:00",
        },
        {
          sender: "Mehmet",
          content: "Benim önerim 'Parazit' filmi.",
          timestamp: "2023-06-11 20:02:00",
        },
        {
          sender: "Ali",
          content: "Bence 'Yeşil Yol' izleyelim.",
          timestamp: "2023-06-11 20:03:00",
        },
        {
          sender: "Veli",
          content:
            "O zaman 'Parazit' ve 'Yeşil Yol' seçeneklerini değerlendirelim.",
          timestamp: "2023-06-11 20:04:00",
        },
      ],
    },
    {
      group_name: "Yoga Grubu",
      participants: ["Ebru", "Ayşe", "Mehmet", "Deniz"],
      messages: [
        {
          sender: "Ebru",
          content: "Herkese merhaba! Bugün yoga dersimiz var.",
          timestamp: "2023-06-18 09:00:00",
        },
        {
          sender: "Ayşe",
          content: "Hangi yoga pozlarını çalışacağız?",
          timestamp: "2023-06-18 09:01:00",
        },
        {
          sender: "Mehmet",
          content: "Bugün temel pozları tekrarlayalım.",
          timestamp: "2023-06-18 09:02:00",
        },
        {
          sender: "Deniz",
          content: "Harika, ders saat kaçta başlayacak?",
          timestamp: "2023-06-18 09:03:00",
        },
        {
          sender: "Ebru",
          content: "Saat 10:00'da başlayacak.",
          timestamp: "2023-06-18 09:04:00",
        },
      ],
    },
    {
      group_name: "Çalışma Grubu",
      participants: ["Ahmet", "Mehmet", "Ayşe", "Fatma", "Cem"],
      messages: [
        {
          sender: "Ahmet",
          content:
            "Arkadaşlar, matematik sorularını çözebileceğimiz bir çalışma planı yapalım.",
          timestamp: "2023-06-17 14:00:00",
        },
        {
          sender: "Mehmet",
          content: "Hangi konular üzerinde çalışmak istersiniz?",
          timestamp: "2023-06-17 14:01:00",
        },
        {
          sender: "Ayşe",
          content: "Cebir ve trigonometriyi ele alabiliriz.",
          timestamp: "2023-06-17 14:02:00",
        },
        {
          sender: "Fatma",
          content: "Ayrıca geometri soruları da çözebiliriz.",
          timestamp: "2023-06-17 14:03:00",
        },
        {
          sender: "Cem",
          content: "Öğleden sonra saat 16:00'da çalışmaya başlayalım.",
          timestamp: "2023-06-17 14:04:00",
        },
      ],
    },
    {
      group_name: "Müzik Paylaşımı",
      participants: ["Elif", "Merve", "Ali"],
      messages: [
        {
          sender: "Merve",
          content:
            "Arkadaşlar, son keşfettiğim bir müzik grubunu paylaşmak istiyorum.",
          timestamp: "2023-06-16 19:00:00",
        },
        {
          sender: "Elif",
          content: "Hangi grup hakkında konuşuyorsun?",
          timestamp: "2023-06-16 19:01:00",
        },
        {
          sender: "Ali",
          content: "Merak ettim, ismini ve tarzını söyleyebilir misin?",
          timestamp: "2023-06-16 19:02:00",
        },
        {
          sender: "Merve",
          content:
            "Grup adı 'The Midnight' ve synthwave türünde müzik yapıyorlar.",
          timestamp: "2023-06-16 19:03:00",
        },
        {
          sender: "Elif",
          content: "Harika, hemen dinlemek istiyorum!",
          timestamp: "2023-06-16 19:04:00",
        },
      ],
    },
    {
      group_name: "Evcil Hayvan Sahipleri",
      participants: ["Aysel", "Eren", "Ceren"],
      messages: [
        {
          sender: "Eren",
          content:
            "Merhaba, evcil hayvanlarımızın sağlık takiplerini yaptıralım mı?",
          timestamp: "2023-06-15 11:00:00",
        },
        {
          sender: "Aysel",
          content: "Evet, veteriner randevusu alalım.",
          timestamp: "2023-06-15 11:01:00",
        },
        {
          sender: "Ceren",
          content: "Ayrıca onlara yeni oyuncaklar da alabiliriz.",
          timestamp: "2023-06-15 11:02:00",
        },
        {
          sender: "Eren",
          content: "Randevu ve oyuncaklar için bir liste hazırlayalım.",
          timestamp: "2023-06-15 11:03:00",
        },
        {
          sender: "Aysel",
          content: "Tamam, işe koyulalım!",
          timestamp: "2023-06-15 11:04:00",
        },
      ],
    },
  ],
};

export default messageData;
