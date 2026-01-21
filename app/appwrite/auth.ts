import { ID, OAuthProvider, Query } from "appwrite";
import { account, appwriteConfig, table } from "./client";
import { redirect } from "react-router";

export const loginWithGoogle = async () => {
    try {
        account.createOAuth2Session({
            provider: OAuthProvider.Google,
            success: `${window.location.origin}/`,
            failure: `${window.location.origin}/404`
        })
    } catch (e) {
        console.error("loginWithGoogle", e);
    }
}

export const logoutUser = async () => {
    try {
        await account.deleteSession({
            sessionId: "current"
        })
        return true;
    } catch (e) {
        console.error("logoutUser", e);
        return false;
    }
}

export const getUser = async () => {
    try {
        const user = await account.get();
        if (!user) return redirect("/sign-in")
        
        const { rows } = await table.listRows({
            databaseId: appwriteConfig.databaseId,
            tableId: appwriteConfig.userTableId,
            queries: [
                Query.equal("accountId", user.$id),
                Query.select(["name", "email", "imageUrl", "joinedAt", "accountId"])
            ]
        })
        return rows.length > 0 ? rows[0] : redirect("/sign-in");
    } catch (e) {
        console.error("getUser", e);
    }
}

export const getGooglePicture = async (accessToken: string) => {
    try {
        const response = await fetch(
          "https://people.googleapis.com/v1/people/me?personFields=photos",
          { headers: { Authorization: `Bearer ${accessToken}` } }
        );
        if (!response.ok) throw new Error("Failed to fetch Google profile picture");
    
        const { photos } = await response.json();
        return photos?.[0]?.url || null;
      } catch (error) {
        console.error("Error fetching Google picture:", error);
        return null;
      }
}

export const storeUserData = async () => {
    try {
      const user = await account.get();
      if (!user) throw new Error("User not found");
  
      const { providerAccessToken } = (await account.getSession({ sessionId: "current" })) || {};
      const profilePicture = providerAccessToken
        ? await getGooglePicture(providerAccessToken)
        : null;
  
      const createdUser = await table.createRow({
        databaseId: appwriteConfig.databaseId,
        tableId: appwriteConfig.userTableId,
        rowId: ID.unique(),
        data: {
          accountId: user.$id,
          email: user.email,
          name: user.name,
          imageUrl: profilePicture,
          joinedAt: new Date().toISOString(),
        }
    });
  
      if (!createdUser.$id) redirect("/sign-in");
    } catch (error) {
      console.error("Error storing user data:", error);
    }
  };

  export const getExistingUser = async (id: string) => {
    try {
      const { rows, total } = await table.listRows({
        databaseId: appwriteConfig.databaseId,
        tableId: appwriteConfig.userTableId,
        queries: [Query.equal("accountId", id)]
    });
      return total > 0 ? rows[0] : null;
    } catch (error) {
      console.error("Error fetching user:", error);
      return null;
    }
  };

  export const getAllUsers = async (limit: number, offset: number) => {
    try {
      const { rows, total } = await table.listRows({
        databaseId: appwriteConfig.databaseId,
        tableId: appwriteConfig.userTableId,
        queries: [
          Query.limit(limit),
          Query.offset(offset)
        ]
      });

      if (total === 0) return { users: [], total: 0 };
      return { users: rows, total };
    } catch (e) {
      console.log("Error fetching users")
    }
  }