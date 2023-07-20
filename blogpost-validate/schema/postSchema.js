import { body } from 'express-validator';

export const blogPostSchema = [
  body('title')
    .isLength({ min: 5, max: 100 })
    .trim()
    .escape()
    .exists()
    .withMessage('Der Titel muss zwischen 5 und 100 Zeichen lang sein.'),

  body('content')
    .isLength({ min: 10 })
    .trim()
    .escape()
    .exists()
    .withMessage('Der Inhalt muss mindestens 10 Zeichen lang sein.'),

  body('authorId')
    .isNumeric()
    .isLength({ min: 8, max: 8 })
    .escape()
    .exists()
    .withMessage('Die Autoren-ID muss eine Zahl und genau 8 Zeichen lang sein.'),

  body('publishDate').isISO8601().toDate().withMessage('Das Veröffentlichungsdatum muss ein gültiges Datum sein.'),

  body('isVisible').isBoolean().withMessage('isVisible muss ein Boolean-Wert sein.'),

  body('tags').isArray().withMessage('tags muss ein Array sein.'),

  body('tags.*').isString().escape().exists().withMessage('Jedes Element in tags muss ein String sein.'),

  body('comments').isArray().withMessage('comments muss ein Array sein.'),

  body('comments.*.comment')
    .isLength({ min: 1, max: 500 })
    .escape()
    .exists()
    .withMessage('Jeder Kommentar muss zwischen 1 und 500 Zeichen lang sein.'),

  body('comments.*.userId')
    .isNumeric()
    .isLength({ min: 8, max: 8 })
    .escape()
    .exists()
    .withMessage('Die Benutzer-ID des Kommentars muss eine Zahl und genau 8 Zeichen lang sein.'),
];
       