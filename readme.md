# AlpineJS

AlpineJS adalah library javascript yang powerful tapi ringan

Ketika kamu berfikir ‘apa itu AlpineJS?’, inget inget ketiga hal ini

- Teknologi yang mirip dengan jQuery
- Tailwind untuk utilitas Javascript. Dimana kita bisa melakukan hal yang bisa dilakukan oleh javascript tanpa harus membuat file javascript
- Declarative & Reactive

## Prerequisite

- Javascript Dasar
- DOM
- jQuery

## Credits

[1 JAM Belajar AlpineJS](https://www.youtube.com/watch?v=Abl7a47VJVM)

---

# Javascript Native

```html
<body>
    <h1>Welcome</h1>
    <div>
      <button onclick="kurang()">-</button>
      <span class="hasil">0</span>
      <button onclick="tambah()">+</button>
    </div>
  </body>
  <script>
    const hasil = document.querySelector(".hasil");
    let count = 0;

    const kurang = () => {
      count--;
      hasil.innerHTML = count;
    };

    const tambah = () => {
      count++;
      hasil.innerHTML = count;
    };
  </script>
```

# With AlpineJS

```html
<div x-data="{count:0}">
        <button @click="count--">-</button>
        <span x-text="count">0</span>
        <button @click="count++">+</button>
</div>
```

# Imperative vs Declarative

## Imperative

gaya penulisan kode yang berfokus pada step by step pengimplementasiannya

```jsx
for (var i = 0; i < arrayAngka.length; i++) {
  if (arrayAngka[i] % 2 == 0 && arrayAngka[i] > 0) {
    angkaGenap.push(arrayAngka[i]);
  }
}
```

## Declarative

gaya penulisan kode yang menggunakan build function tertentu untuk memberikan solusi dan penyelesaian dari masalah yang dihadapi

```jsx
const angkaGenapV2 = arrayAngka.filter((e) => e % 2 == 0 && e > 0);
```

# Kapan Harus Menggunakannya

- Ketika kita harus show & hide DOM Element
- Bind user input
- evenet
- event listening
- manipulasi class

# Cara Install

### via CDN

```html
<head>
		....
    <script
      defer
      src="https://cdn.jsdelivr.net/npm/alpinejs@3.12.0/dist/cdn.min.js"
    ></script>
  </head>
```

# State

perubahan yang dipantau oleh Javascript

```html
<div x-data="{name:'Yasya Indra'}">
	<span x-text="name"></span>
</div>
```

### Global State

```html
<div x-data>
      <ul>
        <template x-for="nm in $store.mahasiswa.nama">
          <li x-text="nm"></li>
        </template>
      </ul>
    </div>
```

```jsx
document.addEventListener("alpine:init", () => {
  Alpine.store("mahasiswa", {
    tahun: 2023,
    nama: ["indra", "afifan", "wahyu"],
  });
});
```

# Templating

Terkadang kita ingin memasukkan komponen html atau aktifitas lainnya alih alih menggunakannya hanya untuk sekedar mengubah text biasa. AlpineJS mempunyai fitur untuk melakukan hal tersebut

### Inner HTML

<aside>
💡 x-html

</aside>

```html
<div
      x-data="{name:'Afifan', link:'<a href=\'https://yasyaindra.com\'>Yasya Indra</a>'}"
      class="container mx-auto w-1/2 text-center mt-10 bg-slate-400 p-10 rounded-xl shadow"
    >
      <h1
        class="text-2xl font-bold bg-clip-text text-transparent drop-shadow-sm text-white drop-shadow-sm"
      >
        Hello, <span x-html="link"></span>
      </h1>
    </div>
```

### Toggle Element

### x-show

untuk menunjukan komponen html berdasarkan nilai boolean

```html
<div x-data="{open:false}" class="container mx-auto w-1/2 text-center my-10 bg-slate-400 p-10 rounded-xl shadow">
      <button @click="open = !open" x-text="open ? 'Tutup' : 'Buka'" class="py-2 px-5 bg-slate-600 text-white rounded-md"></button>
      <div class="w-3/4 mx-auto mt-4 p-5 bg-blue-400 rounded text-white"" x-show="open">Lorem ipsum dolor sit amet</div>
</div>
```

### x-if

untuk menujukan komponen html berdasarkan pengkondisian

```html
<div x-data="{open:false}" class="container mx-auto w-1/2 text-center my-10 bg-slate-400 p-10 rounded-xl shadow">
      <button @click="open = !open" x-text="open ? 'Tutup' : 'Buka'" class="py-2 px-5 bg-slate-600 text-white rounded-md"></button>
      <template x-if="open">
        <div class="w-3/4 mx-auto mt-4 p-5 bg-blue-400 rounded text-white"" x-show="open">Lorem ipsum dolor sit amet</div>
      </template>
</div>
```

### x-transition

untuk memberikan style transisi terhadap komponen yang ditunjukkan

```html
      <div class="..." x-show="open" x-transition>Lorem ipsum dolor sit amet</div>
<!-- using parameter -->
      <div class="..." x-show="open" x-transition.origin.top.left.duration.1000ms>Lorem ipsum dolor sit amet</div>
```

### x-bind

untuk memberikan efek terhadap class yang bergantung pada state / x-data

```html
<div x-data="{open:false}" class="container mx-auto w-1/2 text-center my-10 bg-slate-400 p-10 rounded-xl shadow">
      <button @click="open = !open" x-text="open ? 'Tutup' : 'Buka'" class="py-2 px-5 bg-slate-600 text-black rounded-md" x-bind:class="open ? 'bg-lime-200' : 'bg-cyan-100'"></button>
      <div class="w-3/4 mx-auto mt-4 p-5 bg-blue-400 rounded text-white"" x-show="open" x-transition.origin.top.left.duration.1000ms>Lorem ipsum dolor sit amet</div>
    </div>
```

# Events

memberikan function terhadap komponen html seperti button, link, dll

### x-on:`nama event` / @`nama event`

```html
<div
      x-data="{message:'Hello Yasya Indra'}"
      class="container mx-auto w-3/4 text-center mt-10 bg-red-200 p-10 rounded-xl shadow"
    >
      <button
        x-on:click="window.alert(message)"
        class="py-2 px-5 text-white rounded-md bg-blue-400"
      >
        Klik Saya
      </button>
    </div>
```

### $event

```html
<button
        @click="console.log($event.target.dataset.pesan)"
        data-pesan="Hello World"
        class="py-2 px-5 text-white rounded-md bg-blue-400"
      >
        Klik Saya
      </button>

<button
        @click="$event.target.classList.add('bg-red-600')"
        data-message="Hello World"
        class="py-2 px-5 text-white rounded-md bg-blue-400"
      >
        Klik Saya
      </button>
```

## Keyboard Events

### @keyup & @keydown

fitur yang memungkinkan kita memberikan event terhadap aktifitas html lainnya sepertu form input dengan melibatkan tombol keyboard

```html
<div
      x-data="{pesan: 'Hello WPU!'}"
      class="container mx-auto w-3/4 mt-10 bg-red-200 p-10 rounded-xl shadow"
    >
      <label class="text-lg font-medium text-gray-900 block mb-2"
        >Masukkan Nama</label
      >
      <input
        type="text"
        @keyup.enter="alert(pesan)"
        class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5"
      />
    </div>
```

## Custom Events

### $dispatch

dispatch adalah fitur dimana kita bisa memanipulasi kemampuan event pada script @`nama event` serta mengirimkan data yang diinginkan

```html
<div
      x-data="{pesan: 'Hello WPU!'}"
      @log="alert('Data dikirim oleh '+$event.detail.name)"
      class="container mx-auto w-3/4 mt-10 bg-red-200 p-10 rounded-xl shadow"
    >
      <label class="text-lg font-medium text-gray-900 block mb-2"
        >Masukkan Nama</label
      >
      <input
        type="text"
        @keyup.enter="alert(pesan)"
        class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5"
      />
      <button
        @click="$dispatch('log', { name: 'Indra' })"
        class="rounded-md bg-slate-600 p-5 text-white my-5"
      >
        Kirim
      </button>
    </div>
```

## Event Modifiers

ketika kita ingin memodifikasi efek pada event

```html
<button @click="open = !open" x-text="open ? 'Tutup' : 'Buka'" @click.outside="open = false"  @keyup.esc.window="open = false" class="py-2 px-5 bg-slate-600 text-white rounded-md"></button>

<input
      type="text"
      @keyup.enter="alert(pesan)"
      class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5" @keyup.once="console.log($event.target.value)"
    />
    <input
      type="text"
      @keyup.enter="alert(pesan)"
      class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 mt-3" @keyup.debounce.750ms="console.log($event.target.value)"
  />
```

# Model

### x-model

ketika kita ingin memanipulasi isi data dari sebuah inputan

```html
<textarea
        type="text"
        x-model="pesan"
        class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5"
      ></textarea>
      <span
        x-text="pesan.length"
        :class="pesan.length > 20 ? 'text-red-500' : ''"
      ></span>
```

```html
<input type="checkbox" id="checkbox" class="flex" x-model="open" />
      <span x-text="!open ? 'kosong':'terisi'"></span>
```

```html
<div
      x-data="{pesan: 'Hello WPU!', open:false, hobby:[]}"
      class="container mx-auto w-3/4 mt-10 bg-red-200 p-10 rounded-xl shadow"
    >
<div class="mt-5">
        <div class="flex items-center mb-2">
          <input
            type="checkbox"
            class="w-4 h-4 text-blue-600 border-gray-300 rounded"
            value="menulis"
            x-model="hobby"
          />
          <label for="menulis" id="menulis" class="ml-2 text-sm">Menulis</label>
        </div>
        <div class="flex items-center mb-2">
          <input
            type="checkbox"
            class="w-4 h-4 text-blue-600 border-gray-300 rounded"
            value="menyanyi"
            x-model="hobby"
          />
          <label for="menyanyi" id="menyanyi" class="ml-2 text-sm"
            >Menyanyi</label
          >
        </div>
        <div class="flex items-center mb-2">
          <input
            type="checkbox"
            class="w-4 h-4 text-blue-600 border-gray-300 rounded"
            value="ngoding"
            id="ngoding"
            x-model="hobby"
          />
          <label for="ngoding" class="ml-2 text-sm">ngoding</label>
        </div>
        <span x-text="hobby"></span>
      </div>
</div>
```