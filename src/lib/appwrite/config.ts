import { Client, Account, Databases, Storage, Avatars } from "appwrite";

export const appwriteConfig = {
  url: 'https://cloud.appwrite.io/v1',
  projectId: '6606cb19360359767186',
  databaseId: '6607a827cd4a8f1b8ddd',
  storageId: '6607a7ce014a09fb3421',
  userCollectionId: '6607a9479f6636cdb392',
  postCollectionId: '6607a89ab0e1d24b8c66',
  savesCollectionId: '6607a99642a38c3a43d2',
};

export const client = new Client();

client.setEndpoint('https://cloud.appwrite.io/v1');
client.setProject('6606cb19360359767186');


export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);