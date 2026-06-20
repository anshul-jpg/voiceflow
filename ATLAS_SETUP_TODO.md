# 📋 MongoDB Atlas Setup Tasks (For Co-Founder)

To finish testing and securing the Voxora AI dashboard and login flows on localhost, we need to connect our local project to a hosted MongoDB Atlas cluster. Please complete the following steps to get our database connection URI:

---

### Step 1: Create a Free MongoDB Atlas Cluster
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register) and log in.
2. Under **Deployment** in the sidebar, click **Database** $\rightarrow$ click **Create**.
3. Choose the **M0 (Free)** tier (shared cluster).
4. Select your preferred provider (AWS) and closest region, then click **Create**.

---

### Step 2: Create Database Credentials
1. Go to **Security** $\rightarrow$ **Database Access** in the left sidebar.
2. Click **Add New Database User**.
3. Set a **Username** (e.g., `voxora_admin`) and enter/generate a secure password.
4. Set the user privilege to **Read and write to any database** (Atlas Admin or ReadWrite).
5. Click **Add User** and save the password somewhere safe.

---

### Step 3: Configure Firewall/IP Access
1. Go to **Security** $\rightarrow$ **Network Access** in the left sidebar.
2. Click **Add IP Address**.
3. Select **Allow Access From Anywhere** (adds `0.0.0.0/0`). This ensures we can connect from localhost without static IPs.
4. Click **Confirm**.

---

### Step 4: Copy the Connection String
1. Go back to **Deployment** $\rightarrow$ **Database**.
2. Click **Connect** next to the newly created cluster.
3. Choose **Drivers** (Node.js).
4. Copy the connection string. It will look like this:
   ```text
   mongodb+srv://<db_username>:<db_password>@cluster0.xxxxxx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
   ```

---

### Step 5: Send the Connection Details
Once you have the copied string, please share it along with the password so we can format it and add it to our `.env` file like this:
```env
MONGODB_URI=mongodb+srv://<db_username>:<PASSWORD_HERE>@cluster0.xxxxxx.mongodb.net/voiceflow-dev?retryWrites=true&w=majority&appName=Cluster0
```
This will automatically create a separate testing database `voiceflow-dev` on the cluster, keeping our production data safe!
