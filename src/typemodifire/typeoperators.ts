// keyof

interface Ratings {
    audience: number;
    critics: number;
}

function getRating(ratings: Ratings, key: string): number {
    //return ratings[key];
    // ~~~~~~~~~~~
    // Error: Element implicitly has an 'any' type because expression
    // of type 'string' can't be used to index type 'Ratings'.
    // No index signature with a parameter of
    // type 'string' was found on type 'Ratings'.


    return ratings.critics;
}



const ratings: Ratings = {
    audience: 66,
    critics: 84,
};
getRating(ratings, "audience");
// Ok
getRating(ratings, "not valid");
  // Ok, but shouldn't be
