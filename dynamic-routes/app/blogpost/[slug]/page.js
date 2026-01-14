import NotFound from "@/app/notfound";
export default async function Page({ params }) {
    const { slug } = await params;
    let language = ["python", "cpp", "js"];
    if (language.includes(params.slug)) {
        return <div>My Post: {params.slug}</div>
    }
    else {
        return <div><NotFound /></div>
    }
}
