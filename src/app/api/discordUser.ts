// Definisikan tipe ApiResponse di sini dan ekspor
export interface ApiResponse {
  data: {
    discord_user: {
      id: string;
      username: string;
      avatar: string;
      discriminator: string;
    };
    discord_status: string;
    active_on_discord_mobile: boolean;
  };
  statusBeautify: string;
}

// Definisikan tipe untuk customStatusTexts
interface CustomStatusTexts {
  online?: string;
  onlineMobile?: string;
  offline?: string;
  idle?: string;
  dnd?: string;
  unknown?: string;
}

// Definisikan konstanta discordUserId di luar fungsi
const discordUserId = "882265698372558878";

const getUserData = async (
  discordUserId: string,
  customStatusTexts: CustomStatusTexts = {}
): Promise<ApiResponse> => {
  try {
    // Memastikan discordUserId memiliki nilai sebelum digunakan
    if (!discordUserId) {
      throw new Error('Discord user ID is undefined');
    }

    // Mengambil data pengguna Discord dari API Lanyard
    const rawRes = await fetch(`https://api.lanyard.rest/v1/users/${discordUserId}`);
    
    // Memeriksa apakah respon sukses
    if (!rawRes.ok) {
      throw new Error(`Error fetching Discord user data: ${rawRes.statusText}`);
    }

    const { data } = await rawRes.json();

    // Mengubah status Discord menjadi representasi yang lebih mudah dibaca
    let statusBeautify;
    switch (data.discord_status) {
      case "online":
        statusBeautify = data.active_on_discord_mobile
          ? customStatusTexts.onlineMobile || "Spotify ku Galau"
          : customStatusTexts.online || "Spotify ku Galau";
        data.discord_status = data.active_on_discord_mobile ? "online-mobile" : "online";
        break;

      case "offline":
        statusBeautify = customStatusTexts.offline || "Offline";
        break;

      case "idle":
        statusBeautify = customStatusTexts.idle || "Lagi denger Spotify";
        break;

      case "dnd":
        statusBeautify = customStatusTexts.dnd || "Galau Brutal!";
        break;

      default:
        statusBeautify = customStatusTexts.unknown || "Unknown";
        break;
    }

    // Mengembalikan data pengguna Discord beserta status yang sudah diubah
    return { data, statusBeautify };
  } catch (error) {
    // Menghandle kesalahan jika terjadi
    console.error("Error fetching Discord user data:", error);
    throw new Error("Failed to fetch Discord user data");
  }
};

// Contoh pemanggilan fungsi getUserData dengan customStatusTexts
const customTexts = {
  online: "User is Online",
  onlineMobile: "User is Online on Mobile",
  offline: "User is Offline",
  idle: "User is Idle",
  dnd: "User does not want to be disturbed",
  unknown: "User status is Unknown"
};

getUserData(discordUserId, customTexts).then(response => {
  console.log(response);
}).catch(error => {
  console.error(error);
});

export default getUserData;
