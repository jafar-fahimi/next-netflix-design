import { Movie } from '../typings'

interface Props {
  title: string
  movies: Movie[]
}
export default function Row({ title, movies }: Props) {
  return (
    <div>
      <h2>{title}</h2>
    </div>
  )
}
