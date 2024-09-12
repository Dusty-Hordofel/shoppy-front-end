// "use server";

// import { redirect } from "next/navigation";

// export default async function createUser(
//   //   _prevState: any,
//   formData: { email: string; password: string }
// ) {
//   console.log("🚀 ~ formData:", { ...formData });
//   const res = await fetch(`http://localhost:5500/users`, {
//     method: "POST",
//     body: JSON.stringify({
//       email: "johnool@gmail.com",
//       password: "2222rfff12345678lM#!",
//     }),
//   });

//   const result = await res.json();
//   console.log("🚀 ~ result:", result);
//   if (!result.ok) {
//     console.error(result.message);
//     return { error: true, message: "Error creating user" };
//   }

//   return { success: true, message: "User created successfully" };
// }
