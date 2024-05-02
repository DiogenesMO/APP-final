// import { useEffect, useState } from "react";

// interface Post {
//     id: string;
//     profilePicture: string;
//     userName: string;
//     address: string;
//     description: string;
// }

// export const usePosts = () => {

//     const [data, setData] = useState<Array<Post>>([]);
//     const [isLoading, setIsLoading] = useState(true);

//     const fetchPosts = async () => {
//         const response = await fetch("http://192.168.1.8:3000/");
//         const data: Array<Post> = await response.json();

//         setData(data);
//         setIsLoading(false);
//     };

//     useEffect(() => {
//         fetchPosts();
//     }, []);


//     return { data, isLoading };
// };

import { useEffect, useState } from "react";


interface Post {
    id: string;
    profilePicture: string;
    userName: string;
    address: string;
    description: string;
}

export const usePosts = () => {

    const [data, setData] = useState<Array<Post>>([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchPosts = async () => {
        const response = await fetch("http://192.168.1.8:3001/");
        const data: Array<Post> = await response.json();

        setData(data);
        setIsLoading(false);
    };

    useEffect(() => {
        fetchPosts();
    }, []);


    return { data, isLoading };
};