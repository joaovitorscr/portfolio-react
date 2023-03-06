import Title from '../../components/Title'
import Paragraph from '../../components/Paragraph'
import { GithubSection } from './styles'

const Sobre = () => (
  <section>
    <Title fontSize={16}>Sobre mim</Title>
    <Paragraph tipo="principal">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae ex
      ipsa iste veritatis commodi, harum laudantium fugiat error voluptas
      ratione dolorem quae accusamus blanditiis, sed neque, unde odio.
      Assumenda, quod?
    </Paragraph>
    <GithubSection>
      <img src="https://github-readme-stats.vercel.app/api?username=joaovitorscr&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=joaovitorscr&layout=compact&langs_count=7&theme=dracula" />
    </GithubSection>
  </section>
)

export default Sobre
