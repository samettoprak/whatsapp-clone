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
          sender: "Baba",
          content: "Günaydın, nasılsınız?",
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
  ],
};

export default messageData;
