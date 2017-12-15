/**
 * @summary Base fetch functions for get and post
 * @type {{getFetch: function(*)}}
 */

const blankFetch = {

    getFetch: (endpoint) => {

        fetch(endpoint)
            .then((res) => res.json())
            .catch((err) => {
               throw new Error(`There was and error in your getFetch ${err.message}`);
            });

    }
};
blankFetch.getFetch('../json/names.json');

// export default blankFetch;
