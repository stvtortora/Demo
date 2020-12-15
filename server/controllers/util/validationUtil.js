const Joi = require("joi");

exports.validateTheme = (body, requireId) => {
    const schemaObject = {
        name: Joi.string().required(),
        background_colors_primary: Joi.string().regex(/^#[A-Fa-f0-9]{6}/).required(),
        background_colors_secondary: Joi.string().regex(/^#[A-Fa-f0-9]{6}/).required(),
        border_colors_primary: Joi.string().regex(/^#[A-Fa-f0-9]{6}/).required(),
        icon_colors_menuItem: Joi.string().regex(/^#[A-Fa-f0-9]{6}/).required(),
        icon_colors_activeMenuItem: Joi.string().regex(/^#[A-Fa-f0-9]{6}/).required(),
        icon_colors_other_a: Joi.string().regex(/^#[A-Fa-f0-9]{6}/).required(),
        icon_colors_other_b: Joi.string().regex(/^#[A-Fa-f0-9]{6}/).required(),
        icon_colors_other_c: Joi.string().regex(/^#[A-Fa-f0-9]{6}/).required(),
        icon_colors_other_d: Joi.string().regex(/^#[A-Fa-f0-9]{6}/).required(),
        icon_colors_other_e: Joi.string().regex(/^#[A-Fa-f0-9]{6}/).required(),
        surface_colors_primary: Joi.string().regex(/^#[A-Fa-f0-9]{6}/).required(),
        surface_boxShadows_primary: Joi.string().regex(/^#[A-Fa-f0-9]{6}/).required(),
        tab_colors_primary: Joi.string().regex(/^#[A-Fa-f0-9]{6}/).required(),
        tab_colors_secondary: Joi.string().regex(/^#[A-Fa-f0-9]{6}/).required(),
        text_colors_primary: Joi.string().regex(/^#[A-Fa-f0-9]{6}/).required(),
        text_colors_secondary: Joi.string().regex(/^#[A-Fa-f0-9]{6}/).required(),
        text_colors_menuItem: Joi.string().regex(/^#[A-Fa-f0-9]{6}/).required(),
        text_colors_other_a: Joi.string().regex(/^#[A-Fa-f0-9]{6}/).required(),
        text_colors_other_b: Joi.string().regex(/^#[A-Fa-f0-9]{6}/).required(),
        text_colors_other_c: Joi.string().regex(/^#[A-Fa-f0-9]{6}/).required(),
        text_colors_other_d: Joi.string().regex(/^#[A-Fa-f0-9]{6}/).required(),
        text_colors_other_e: Joi.string().regex(/^#[A-Fa-f0-9]{6}/).required(),
        text_colors_other_f: Joi.string().regex(/^#[A-Fa-f0-9]{6}/).required(),
        text_colors_other_g: Joi.string().regex(/^#[A-Fa-f0-9]{6}/).required()
    }

    if (requireId === true) {
        schemaObject.id = Joi.number().required()
    }

    const schema = Joi.object(schemaObject);

    const { error, value } = schema.validate(body);

    console.log(error);

    if (error) {
        console.log(`Error validating theme: ${error.details.message}`);
        throw new Error("Missing or incorrect parameters");
    }

    console.log(`validated theme: ${value}`);

    return value;
}