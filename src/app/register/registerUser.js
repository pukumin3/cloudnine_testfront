"use server";
import { revalidatePath } from 'next/cache';

const registerUser = async (formData) => {
    const companyName = formData.get('company-name');
    const userName = formData.get('user_name');
    const email = formData.get('email');
    const password = formData.get('password');
    const companyUrl = formData.get('company_url');
    const companySize = formData.get('company_size');
    const companyCategory = formData.get('company_category');
    const entityTitle = formData.get('entity_title');
    const entryImage = formData.get('entry_image');
    const entryDescription = formData.get('entry_description');
    const entryAchievement = formData.get('entry_achievement');
    const strength = formData.get('strength');
    const tags = formData.get('tags');

    const body_msg = JSON.stringify({
        user_name: userName,
        company_name: companyName,
        email: email,
        password: password,
        company_url: companyUrl,
        company_size: companySize,
        company_category: companyCategory,
        entity_title: entityTitle,
        entry_image: entryImage,
        entry_description: entryDescription,
        entry_achievement: entryAchievement,
        strength: strength,
        tags: tags,
    })
    console.log(body_msg);

    const res = await fetch(process.env.API_ENDPOINT+`/register/user`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: body_msg,
    });
    // console.log(res);
    // if (!res.ok) {
    //     throw new Error('Failed to create customer');
    // }

    // revalidatePath(`/register/user`);
}

export default registerUser;
