import { API_URL } from "../../../(home)/page";

async function getMovie(id:string){
  console.log(`Fetching movies: ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const response  = await fetch(`${API_URL}/${id}`);
  return response.json();
}

async function getVideos(id: string){
  console.log(`Fetching videos: ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const response  = await fetch(`${API_URL}/${id}/videos`);
  return response.json();
}

export default async function MovieDetail({params, searchParams} ){
  const {id} = await params;
  console.log('params:',{id});
  console.log('searchParams:', await searchParams);
  const[movie, videos] = await Promise.all([getMovie(id), getVideos(id)]);
  // const movie = await getMovie(id);
  // const videos = await getVideos(id);
  return <>
    <h1>{movie.title}</h1>
  </>
}