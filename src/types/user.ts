export interface User {
  _id: string;
  userName: string;
  email: string;
  dateOfBirth: string;
  profile: {
    bio: string;
    avatar: string | null;
    coverImage: string | null;
    socialLinks: {
      platform: "twitter" | "youtube" | "twitch";
      url?: string;
    }[];
  };
  createdAt: string;
  updatedAt: string;
}
