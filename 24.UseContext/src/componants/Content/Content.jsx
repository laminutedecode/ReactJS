import React, {useContext} from 'react'
import './Content.css'
// 1) créer les composants
// 2) imporet Btns
import BtnToggle from "../Btns/Btns"


// 5) on importe le theme
import {ThemeContext} from '../../ThemeContexte'

export default function Content() {


  // puis on créer la variable suivante
  const {theme} = useContext(ThemeContext)

  console.log(theme);


  return (
    
      <div className="container">
        <h1>Je suis un titre</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          odio quidem natus beatae amet voluptas tenetur similique commodi
          cumque deserunt, quibusdam exercitationem magnam eligendi. Quia ipsum
          quae voluptatem praesentium impedit at, quis consequatur rerum,
          reprehenderit magni architecto cupiditate ipsa quod quisquam dolor nam
          ad est! Dolores aperiam, corporis quo repudiandae quia corrupti
          adipisci, ullam asperiores alias natus sequi enim consequatur cumque
          expedita deserunt! Error eaque dolore quia earum cumque quidem
          quibusdam corporis fugit sed aliquam voluptatibus laboriosam, nam
          modi! Hic voluptatum aperiam fugit. Perspiciatis eius pariatur natus
          suscipit labore inventore aperiam debitis iste dignissimos quasi
          adipisci nihil quia tempora distinctio dolore voluptatem quis aut, ad
          maxime reprehenderit iure neque provident veniam ab? Reprehenderit
          harum minima ducimus et facilis similique enim vero, error quasi
          veritatis mollitia iste consequatur modi molestiae temporibus nesciunt
          dolorem, incidunt quod? Minus iusto amet natus architecto quae
          repellat velit nisi, hic atque tenetur dolore esse id eveniet. Dolores
          dolorem corrupti autem recusandae impedit. Veniam minus dolores ipsum
          quae nostrum distinctio necessitatibus eligendi reiciendis, beatae
          aut. Deserunt accusantium accusamus reprehenderit incidunt ipsum,
          quaerat dolores dolore doloribus modi sit aliquid tempora vero
          similique dicta culpa obcaecati nisi ab porro voluptatibus ullam sunt.
          Adipisci ut odio quas at! Praesentium temporibus enim culpa adipisci
          quas ducimus perspiciatis distinctio officia odit tenetur, nostrum,
          aspernatur quam fugit consectetur minima, iusto suscipit quis
          obcaecati recusandae repudiandae est fuga dolorum? Quidem fuga,
          adipisci dolores beatae eius minus expedita odio, voluptate nam optio
          saepe libero! Quae cupiditate quisquam consequuntur beatae sapiente
          qui voluptatibus? Voluptatem aliquam quis maiores velit, quibusdam
          corrupti soluta. Aut quas nostrum nulla quos cum sunt enim voluptas
          earum. Suscipit, repellendus totam? Provident fugit nostrum, quae,
          repellendus ea nobis ad debitis possimus sed modi incidunt hic vero ex
          eveniet repudiandae voluptatum impedit obcaecati iure eos! At sequi
          est ut molestias numquam. Accusantium quam voluptas incidunt rem
          cumque provident adipisci odio quaerat accusamus, in consectetur
          praesentium perspiciatis ducimus dicta error facere. Molestiae ipsa
          exercitationem, saepe nulla omnis cumque tempore vitae fuga porro
          delectus velit? Quaerat est dolore id rerum laboriosam, a voluptas
          sunt ea, obcaecati debitis laudantium odio ducimus eum reprehenderit
          animi corrupti, officiis recusandae quae consequatur quasi. Ea rem
          quas, modi facere possimus eos, accusamus dicta in porro culpa
          voluptate tempore asperiores, ullam ipsam facilis dolor unde neque
          iste esse. Vitae adipisci eos at, repellat dicta veniam cupiditate
          unde inventore distinctio molestias aliquam cumque molestiae itaque
          quod fugit necessitatibus. Voluptate, doloribus repudiandae
          perferendis, aliquid odit atque recusandae maiores numquam ab vitae
          quidem rerum asperiores doloremque placeat error est unde. Eaque eum
          animi aliquam asperiores veniam esse, inventore quo autem voluptates
          harum modi perspiciatis placeat doloremque sapiente! Laborum deserunt,
          dolores assumenda excepturi nobis sunt quod esse architecto porro
          aspernatur et libero sint quibusdam tenetur accusamus quaerat, sequi,
          mollitia itaque! Repudiandae perferendis pariatur saepe reprehenderit
          eos neque quidem quo quisquam, delectus esse officiis, cupiditate
          omnis veniam sunt dolores provident doloremque fuga nemo est aliquam
          at eligendi dolore. Earum, vitae dolor quo ipsa aliquid at eveniet
          quae ducimus vel. Ratione soluta possimus earum tempora obcaecati
          eligendi non.
        </p>

        <BtnToggle />
      </div>
    
  );
}
