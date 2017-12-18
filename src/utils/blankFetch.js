/**
 * @summary Base fetch functions for get and post
 * @type {{getFetch: function(*)}}
 */

export const blankFetch = {

    getFetch: (endpoint) => {

        return fetch(endpoint)
            .then((res) => res.json())
            .catch((err) => {
               throw new Error(`There was and error in your getFetch ${err.message}`);
            });

    }
};
// blankFetch.getFetch('../json/names.json');

// export blankFetch;
