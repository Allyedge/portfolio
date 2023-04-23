<template>
  <div
    class="flex flex-col items-center bg-cover bg-scroll bg-repeat py-8 px-8 text-white md:py-16 lg:bg-fixed"
    :style="{
      'background-image': `url('images/background.png')`,
    }"
  >
    <div>
      <h1 class="self-start text-4xl font-extrabold">Alim Arslan Kaya</h1>
      <h2 class="mt-16 text-xl">Some of my projects</h2>
      <div class="mt-4 space-y-8 md:space-y-16">
        <Project
          :year="2023"
          name="AllyDB"
          image="/allydb.png"
          description="An in-memory database built using Elixir."
          link="https://github.com/Allyedge/allydb"
        />
        <Project
          :year="2022"
          name="Allyignore"
          image="/allyignore.png"
          description="A tool that finds and removes unnecessary lines from .gitignore files."
          link="https://github.com/Allyedge/allyignore"
        />
        <Project
          :year="2022"
          name="Exbitly"
          image="/exbitly.png"
          description="An Elixir library to interact with the Bitly API."
          link="https://github.com/Allyedge/exbitly"
        />
      </div>
    </div>
    <hr class="mt-8 w-1/2" />
    <Footer />
  </div>
</template>
