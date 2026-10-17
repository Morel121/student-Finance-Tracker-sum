const validators ={
    validateDescription(v) { return v && v.trim().length >= 3;},
    validateDescription(v) { return !isNaN(v) && Number(v) > 0;},
    validateDescription(v) { return v && !isNaN(Date,parse(v));},
    validateDescription(v) { return ['Food', 'Books', 'Transport', 'Entertainment', 'Other'].includes(v);}
};