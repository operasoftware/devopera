Title: Arquitetura da Informação – Planejando um web site
----
Date: 2011-09-28 12:22:19
----
Lang: pt
----
Author: 
----
License: Creative Commons Attribution-Noncommercial-Share Alike 3.0 Unported
----
License_url: http://creativecommons.org/licenses/by-nc-sa/3.0/
----
Text:

<h2>Arquitetura da Informação – Planejando um web site</h2>

<p><img class="alignnone size-medium wp-image-1002" title="André Buzzo Webdesign - Currículo de Padrões Web - Arquitetura da Informação: Planejando um Website" src="http://www.andrebuzzo.com.br/wp-content/uploads/2011/04/padroes-web-300x139.jpg" alt="André Buzzo Webdesign - Currículo de Padrões Web - Arquitetura da Informação: Planejando um Website" width="300" height="139" /></p>
<h2>Introdução</h2>
<p>Tradicionalmente, planejar um web site (ou qualquer outro projeto) é uma tarefa pouco estressante. Todos têm uma opinião sobre como deve ser a construção de um site, e com certeza, as opiniões serão contraditórias se comparadas à de terceiros.  Seu primeiro objetivo deverá ser criar uma aplicação que seja utilizável por qualquer pessoa. Realmente não deveria importar o que seu chefe diz, o que o cara lá de baixo com doutorado em engenharia de software diz, ou até mesmo suas preferências pessoais; no final do dia, você terá criado um site para um grupo particular de pessoas, e a opinião desse grupo é que realmente deve ser importante.<br />
Esse artigo irá discutir o início do planejamento de um site, e a disciplina que é comumente referenciada como Arquitetura da Informação, ou sua sigla em inglês, IA. Isso abrange o pensamento sobre quem será o seu público alvo, quais informações e serviços eles desejam encontrar no sistema, e como você deverá disponibilizar isso a eles. Você verá todo o corpo das informações que necessitam presença no site e pensar em como quebrá-las em partes, e como esses conteúdos deverão se relacionar com as essas partes. As seções abaixo demonstram o que iremos estudar:</p>
<ul>
<li>Você precisa planejar o site que está contruindo
<ul>
<li>Apresentando o “The Dung Beatles”</li>
<li>E agora? Criando um mapa do site</li>
<li>Nomeando suas páginas</li>

<li>Adicionando alguns detalhe</li>
</ul>
</li>
<li>Sumário</li>
<li>Alguns exercícios práticos</li>
</ul>
<h2><strong>The Dung Beatles</strong></h2>
<p>O The Dung Beatles (TDB) tem um problema! É a melhor banda tributo aos Beatles de sua região, mas eles precisam divulgar seu trabalho pois começarão uma turnê por todo o país. Eles têm datas marcadas do sul ao norte, mas virtualmente, são desconhecidos fora de sua cidade natal. Eles necessitam, ao menos, usar um pouco de tecnologia para tentar reunir uma certa quantidade de fãs para que possam ganhar algum dinheiro com as apresentações.</p>
<p>Sorte do TDB, pois temos algo chamado World Wide Web, e eles rapidamente decidiram que com a criação de um web site, poderiam resolver o problema. A banda precisa promover as datas das apresentações, criar um banco de fãs nas cidades onde se apresentarão e ganhar alguma grana com isso. Você irá analisar as idéias com eles e ver se consegue colocar no papel um projeto para o site deles.</p>
<p>Você marcará uma reunião com seus novos clientes para levantar os detalhes do projeto para poder delimitar um prazo de entrega e qual o valor será cobrado. Você abre o encontro sugerindo suas idéias e objetivos em uma ordem lógica, e vai ouvindo o que eles desejam. O que a banda pretende com o web site?</p>

<p>A banda começa dizendo sobre a sua turnê, e como eles querem que os fãs dos Beatles saibam as datas, locais e horários de suas apresentações em determinadas cidades. Agora é fevereiro, e eles pretendem começar a turnê em torno de 5 meses.</p>
<p>Espere um momento! Apenas um web site não consegue gerar tráfego suficiente e publicidade para si mesmo! Você conseguiu entender que o objetivo principal do site é ser uma “casa para os fãs dos Beatles”, um lugar onde eles poderão encontrar notícias, datas dos shows, dentre outras coisas. Através dos fãs (boca-a-boca), e outras maneiras de se promover, novos usuários serão direcionados ao site onde poderão fazer download de faixas gravadas pela banda, fotos dos integrantes (a caráter) e onde/quando podem assistí-los ao vivo!</p>
<p>Raul McCoffee, o líder da banda, aponta um tópico interessante: seria legal disponibilizar conteúdo para venda, como CD´s e materiais de divulgação da banda para levantar alguns fundos. Você reúne a banda e cria um rápido esboço sobre o que um visitante provavelmente queira encontrar no site. Isso é, grosseiramente falando, chamado de Brainstorming (tempestade de idéias); você têm em mãos uma pequena estrutura até esse ponto.</p>
<p>Você terá dois grupos de usuários que acessarão o web site: as pessoas que conhecem o TDB e gostam deles (fãs) e as pessoas que não conhecem. Você precisa tratar essas pessoas de duas maneiras distintas; fãs em potencial precisam “vender” a banda,  enquanto os fãs de longa data precisam “alimentar o seu vício” (por assim dizer!). Qual o tipo de informação que cada grupo gostaria de encontrar no site? A figura 1 nos dá uma indicação sobre isso – esse é um típico rascunho  que você começará a desenhar nos seus próximos projetos web. A partir disso, você irá trabalhar as páginas que o site necessita, e cada uma deverá ser ligada (links) com outra.</p>
<p><a href="http://www.andrebuzzo.com.br/wp-content/uploads/2011/04/grafico01.jpg"><img class="alignnone size-full wp-image-1003" title="grafico01" src="http://www.andrebuzzo.com.br/wp-content/uploads/2011/04/grafico01.jpg" alt="" width="600" height="800" /></a></p>

<p class="comment">Figura 1 – O que os visitantes do site procuram</p>


<p>Você passou o orçamento e fechou com eles, para produzir o site em um mês. E você se comprometeu a voltar a falar com a banda em alguns dias, com algumas projeções sobre a direção que o site tomará.</p>
<h2>E agora? Criando um mapa do site</h2>
<p>Um monte de pessoas começam a criar agora, um mapa de site, que mais se parece com um organograma. Isso normalmente é um bonito gráfico bem básico que mostra os nomes que cada página receberá e como se ligam umas as outras na estrutura do web site. Pessoalmente, sou a favor de um pouco mais de detalhes e conversar sobre o conteúdo que cada página possuíra. Por exemplo, uma página é rotulada como HOME, mas o que abrangerá o conteúdo dessa página?</p>
<p>Haverá uma mensagem irritante e desgastada de “Bem-vindo ao web site!” ou será uma página dinâmica com que conterá notícias e imagens bem apresentáveis? Tire alguns minutos para pensar em que as páginas do gráfico acima se tornarão e o que haverá em cada uma delas. Você precisará montar o seu mapa do site antes de partir para a próxima parte!</p>
<p>Vamos começar pelo básico: um dos organogramas que mencionei acima. A figura 2 mostra como eu montaria o web site, utilizando como base a nossa reunião com a banda:</p>
<p><a href="http://www.andrebuzzo.com.br/wp-content/uploads/2011/04/grafico02.jpg"><img class="alignnone size-full wp-image-1004" title="grafico02" src="http://www.andrebuzzo.com.br/wp-content/uploads/2011/04/grafico02.jpg" alt="" width="650" height="400" /></a></p>

<p class="comment">Figura 2. Primeiro mapeamento do site.</p>

<p>Isso definitivamente exibe todas as páginas que precisaremos, mas não há nenhum agrupamento rolando por aqui! É só uma grande bagunça de páginas por enquanto, e até agora não dediquei um tempo para pensar em como serão chamadas as páginas. Vou realizar mais uma ação e tentar agrupar um pouco mais as mesmas – A figura 03 mostra o que eu realmente fiz:</p>
<p><a href="http://www.andrebuzzo.com.br/wp-content/uploads/2011/04/grafico03.jpg"><img class="alignnone size-full wp-image-1005" title="grafico03" src="http://www.andrebuzzo.com.br/wp-content/uploads/2011/04/grafico03.jpg" alt="" width="650" height="750" /></a></p>


<p class="comment">Figura 3. Novo mapeamento – melhor estruturado</p>


<p>Eu fiz alguns agrupamentos com a revisão do mapa. A página “Notícias” proporciona à banda inserir qualquer coisa que desejem compartilhar com os fãs. Mesmo após a turnê acabar, e a página “Datas e Locais da turnê” não for mais relevante, eles serão capazes de postar conteúdo! Adotar uma estrutura de BLOG nesse espaço permitirá aos fãs comentar as histórias, e irão ajudar a construir uma comunidade online sobre a o TDB. Notícias e Eventos com certeza vão gerar discussões, então vamos agrupá-los!</p>
<p>Por “coincidência”, a palavra NOTÍCIA é simples, e é fácil de ser reconhecido como um canal de conteúdo, e, portanto, mais fácil em se obter a informação desejada!</p>
<p>Nossa nova página “Sobre a Banda” agrupa a discografia dos membros da banda assim como suas fotos. Adotando esse caminho, fica fácil em se obter a informação sobre determinado músico! Seguindo uma “regra” de nomenclatura, a palavra “Sobre” é muito utilizada em web sites. Toda a vez que um usuário deseja saber mais sobre a empresa, um produto, um serviço, ou um indivíduo, eles procuram um  link chamado “Sobre”.</p>
<p>Finalmente, o termo “Discografia” é um pouco mais técnico. É bem possível que poucas pessoas reconheçam ou assimilem que é outra maneira de dizer “Música”!  Além do mais, colocar uma página chamada assim dá a abertura para contar histórias de inspiração, o significado de determinada música… você pegou a idéia certo? Acho que estamos prontos para sacudir! Depois que falei um pouco sobre a sensibilidade da nomenclatura das páginas, nós vamos detalhar um pouco mais sobre cada página.</p>

<h2>Nomeando suas páginas</h2>
<p>O nome das páginas pode ser um dos pontos mais cruciais que você terá que pesar no desenvolvimento de um site! Não é só importante para o que o usuário encontre o que procura, mas para mostrar que seu site é facilmente encontrado por motores de busca (você encontrará diversas dicas sobre como melhorar o posicionamento do seu site durante esse percurso)!</p>
<p>Em suma,  os motores de busca procuram o conteúdo da página, a URL, e os textos de cada link que eles encontram e classificam com “maior importância”. Nomear suas páginas e suas URL´s de maneira intuitiva fará com que qualquer pessoa que queria linkar o site dela com o seu, utilizar o mesmo princípio!</p>
<p>Aqui vai um exemplo: Digamos que você seja de uma fábrica de carros, e tenha um carro chamado “O veloz”. Você cria um site para promover o seu automóvel, e uma das páginas lista os opcionais que vêm de fábrica. Você nomeará essa página como? “Opcionais”, “Opcionais Inclusos”, “Opcionais do Veloz”, ou “Sinos e Campainhas”? Eu sugiro “Opcionais do Veloz”, o qual seria o melhor para essa lista. Especifica o conteúdo da página, deixando seu título acima na página e bem destacado (entenda-se como título as tags HTML), que são excelentes para os motores de busca a encontrarem, e você poderá colocá-lo na URL também! Algo que seguiria mais ou menos esse caminho: www.suafabrica.com.br/o-veloz/adicionais-do-veloz.html</p>
<h2>Adicionando alguns detalhes</h2>
<p>Você não irá conseguir entender tudo isso de uma vez, mas nesse ponto, você será ao menos capaz de criar uma descrição do que você imagina para o site bem  mais detalhado após o briefing. Após criar toda a estrutura, numerar suas páginas e criar uma descrição para cada uma delas, como faremos na figura 4 para a página HOME (você tem a chance de fazer o mesmo para as outras páginas desse site!).</p>
<p><img class="alignnone size-full wp-image-1006" title="grafico04" src="http://www.andrebuzzo.com.br/wp-content/uploads/2011/04/grafico04.jpg" alt="" width="577" height="340" /></p>

<p class="comment">4. Detalhes sobre a página HOME do site</p>


<p>Isso mostra o quão está envolvido com  o projeto até agora! Você não precisa descrever a funcionalidade da página, a tecnologia que vai usar para criá-la, ou o design que pretende usar detalhadamente!  Só descreva o que vem na sua cabeça com termos usuais. Seu objetivo até aqui é informar de maneira clara o que está pensando ao seu cliente e tentar imaginar aquele “algo a mais”!</p>
<p>Não é incomum chegar nessa parte e pensar que são inúmeras páginas, e que você nunca irá conseguir conteúdo suficiente para preenchê-las!  Você pode enlouquecer criando a hierarquia das páginas! Por exemplo, se cada integrante quiser publicar um parágrafo sobre si mesmo,  não será necessário criar uma página para cada biografia. Elas podem ir numa mesma página.</p>
<h2><strong>Sumário</strong></h2>
<p><strong> </strong></p>
<p>Esse artigo olhou o site como um todo, e como você deveria pensar em estruturá-lo! No próximo artigo, você descerá os níveis da hierarquia proposta, e ver o que acontece para chegar a um grande site: quais as utilidades a serem incluídas e onde incluí-las! Os artigos 8,9 e 10 irão falar sobre o design da página. E isso é feito através de 3 etapas lógicas (analise com seu cliente cada etapa realizada para se certificar que ele está contente com o desenvolvimento):</p>
<ol>
<li>Primeiramente, analise o conteúdo do web site e decida como estruturar esse conteúdo dentro das páginas;</li>

<li>Depois, decida como será a funcionalidade que realmente será utilizada no web site;</li>
<li>A última coisa que você fará antes de realmente começar a codificar o site é criar o design visual dele – o layout das páginas, as combinações de cores, etc.</li>
</ol>
<h2><strong>Exercícios</strong></h2>
<p><strong> </strong></p>
<ul>
<li>Volte a Figura 1 e tente desenvolver um brainstorm similar ao exposto aqui sobre um carro (pode ser um que já existe ou um imaginário)
<ul>
<li>O que os usuários do site querem saber?</li>
<li>Há qualquer coisa em outros sites sobre carro que você entenda como essencial? E dispensável?</li>

<li>Pegue o seu brainstorming e tente organizar as informações. Quais agrupamentos de páginas fazem maior sentido?</li>
<li>Outra atividade que cai bem é a análise da concorrência:
<ul>
<li>Faça uma busca por sites de bandas (você obterá um bônus se as pesquisas forem realizadas sobre Bandas Tributo), e dê uma olhada na informação disponibilizada. Esquecemos de alguma coisa?</li>
</ul>
</li>
<li>Dê uma olhada na Figura 4 e tente desenvolver uma estrutura similar para as páginas que encontramos nesses web sites.</li>
</ul>
</li>
</ul>
<h2>Sobre o autor</h2>
<p><span class="flutuaImagem"><img class="alignnone size-full wp-image-1008" title="autor" src="http://www.andrebuzzo.com.br/wp-content/uploads/2011/04/autor.jpg" alt="" width="150" /></span>Jonathan Lane é o presidente da Industry Interactive – uma empresa de desenvolvimento web/aplicativos para web localizada em Mayne Island, na Columbia Britânica, Canadá. Ele trabalhou no desenvolvimento da Universidade de Lethbridge Curriculum Re-Development Center como coordenador desse projeto por muitos anos.</p>

<p>Ele também escreve para o blog Flyintroll e atualmente desenvolve o Mailmanagr, uma interface de e-mail para gerenciamento de Projetos de Campo.</p>
<div class="clear"></div>
<h2><strong>Sobre o tradutor</strong></h2>
<p><span class="flutuaImagem"><img class="alignnone size-medium wp-image-1007" title="andre-buzzo" src="http://www.andrebuzzo.com.br/wp-content/uploads/2011/04/andre-buzzo-300x225.jpg" alt="" width="150" /></span></p>
<p><strong>André Buzzo</strong><strong> </strong>é webdesigner da empresa KR Comunicação Integrada, moderador do Fórum Mx Masters e colaborador dos sites Vídeo Aulas Brasil e Mx Masters.</p>
<p>Formado em webdesign, atua como Consultor Web pela Editora Fato, além de ministrar cursos.</p>
<p>Mantém também um site pessoal, acessado no endereço: www.andrebuzzo.com.br, onde posta vídeo aulas e traduções dos mais diversos artigos sobre internet.</p>
<p><strong>Fonte: </strong><a href="http://dev.opera.com/articles/view/6-information-architecture-planning-o/" target="_blank">http://dev.opera.com/articles/view/6-information-architecture-planning-o/</a></p>


