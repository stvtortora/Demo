export default async (res, methodVerb, resourceName) => {
    const resVal = await res.json();

    if (res.status !== 200) {
        if (resVal.message) console.log(`Error ${methodVerb} ${resourceName}: ${resVal.message}`);
        return { error: true, response: undefined };
    }

    return { error: false, response: resVal };
}