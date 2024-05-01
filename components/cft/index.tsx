import ArrowIcon from "@components/icons/ArrowIcon";

export default function Certificados() {
  return (
    <section className="relative m-auto w-full max-w-2xl pb-40" id="awards">
      <div className="mb-10 w-full text-center uppercase text-gray-600">
        Certificados e Faculdade <ArrowIcon />
      </div>

      <div className="mx-auto w-full">
        <div className="flex flex-wrap justify-center">
          <div className="w-full">
            <div className="relative mb-8 flex w-full min-w-0 flex-col">
              <div className="flex-auto px-4 text-gray-700">
                <div className="-ml-4 text-xl font-semibold">freeCodeCamp</div>
                <ul className="mt-4 list-outside list-disc space-y-1">
                  <li className="text-blue-700 bg-gradient-to-r underline decoration-indigo-500/30 ease-in-out hover:opacity-50"><a href="https://freecodecamp.org/certification/GustavoH/scientific-computing-with-python-v7">Scientific Computing with Python</a></li>
                  <li className="text-blue-700 bg-gradient-to-r underline decoration-indigo-500/30 ease-in-out hover:opacity-50"><a href="https://www.freecodecamp.org/certification/GustavoH/back-end-development-and-apis">Back End Development and APIs</a></li>
                  <li className="text-blue-700 bg-gradient-to-r underline decoration-indigo-500/30 ease-in-out hover:opacity-50"><a href="https://www.freecodecamp.org/certification/GustavoH/data-visualization">Data Visualization</a></li>
                  <li className="text-blue-700 bg-gradient-to-r underline decoration-indigo-500/30 ease-in-out hover:opacity-50"><a href="https://www.freecodecamp.org/certification/GustavoH/quality-assurance-v7">Quality Assurance</a></li>
                  <li className="text-blue-700 bg-gradient-to-r underline decoration-indigo-500/30 ease-in-out hover:opacity-50"><a href="https://www.freecodecamp.org/certification/GustavoH/javascript-algorithms-and-data-structures">JavaScript: Algorithms and Data Structures</a></li>
                  <li className="text-blue-700 bg-gradient-to-r underline decoration-indigo-500/30 ease-in-out hover:opacity-50"><a href="https://www.freecodecamp.org/certification/GustavoH/front-end-development-libraries">Front End Development Libraries</a></li>
                  <li className="text-blue-700 bg-gradient-to-r underline decoration-indigo-500/30 ease-in-out hover:opacity-50"><a href="https://www.freecodecamp.org/certification/GustavoH/responsive-web-design">HTML & Css: Responsive Web Design</a></li>
                </ul>
                <div className="-ml-4 mt-4 text-xl font-semibold">Cruzeiro Do Sul</div>
                <ul className="mt-4 list-outside list-disc space-y-1">
                <li>Ciências Da Computação ( 2023 - 2027 )</li>
                <li>Ciências Contábeis ( 2021 - 2025)</li>
                </ul>
                <div className="-ml-4 mt-4 text-xl font-semibold">Cursos Alura</div>
                <a className="text-blue-700 bg-gradient-to-r underline decoration-indigo-500/30 ease-in-out hover:opacity-50" href="https://cursos.alura.com.br/user/gustavo-sitcon-com-br/fullCertificate/9a317fffba1ad19ecf3744616bfb5cef">Clique aqui</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
