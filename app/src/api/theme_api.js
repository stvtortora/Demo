import handleResponse from "../utils/apiUtil/handleResponse";

export const getThemes = async () => {
    const res = await fetch("http://localhost:7070/themes");
    return await handleResponse(res, "getting", "themes");
}

export const updateTheme = async (theme) => {
    const res = await fetch(`http://localhost:7070/theme/${theme.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(theme),
      });
      return await handleResponse(res, "updating", "theme");
}

export const createTheme = async (theme) => {
  const res = await fetch(`http://localhost:7070/theme`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(theme),
    });
    return await handleResponse(res, "creating", "theme");
}

export const deleteTheme = async (themeId) => {
  const res = await fetch(`http://localhost:7070/theme/${themeId}`, {
      method: 'DELETE'
    });
    return await handleResponse(res, "deleting", "theme");
}