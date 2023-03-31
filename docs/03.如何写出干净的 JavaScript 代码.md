# 如何写出干净的 JavaScript 代码
## 1. 变量

### 使用有意义的名称

变量的名称应该是可描述，有意义的， `JavaScript` 变量都应该采用驼峰式大小写 ( `camelCase` ) 命名。

```javascript
// Don't ❌
const foo = "JDoe@example.com";
const bar = "John";
const age = 23;
const qux = true;

// Do ✅
const email = "John@example.com";
const firstName = "John";
const age = 23;
const isActive = true
```

布尔变量通常需要回答特定问题，例如：

```javascript
isActive 
didSubscribe 
hasLinkedAccount
```

### 避免添加不必要的上下文

当对象或类已经包含了上下文的命名时，不要再向变量名称添加冗余的上下文。

```javascript
// Don't ❌
const user = {
  userId: "296e2589-7b33-400a-b762-007b730c8e6d",
  userEmail: "JDoe@example.com",
  userFirstName: "John",
  userLastName: "Doe",
  userAge: 23,
};

user.userId;

// Do ✅
const user = {
  id: "296e2589-7b33-400a-b762-007b730c8e6d",
  email: "JDoe@example.com",
  firstName: "John",
  lastName: "Doe",
  age: 23,
};

user.id;
```

### 避免硬编码值

确保声明有意义且可搜索的常量，而不是直接插入一个常量值。全局常量可以采用 `SCREAMING_SNAKE_CASE` 风格命名。

```javascript
// Don't ❌
setTimeout(clearSessionData, 900000);

// Do ✅
const SESSION_DURATION_MS = 15 * 60 * 1000;

setTimeout(clearSessionData, SESSION_DURATION_MS);
```

## 2. 函数

### 使用有意义的名称

函数名称需要描述函数的实际作用，即使很长也没关系。函数名称通常使用动词，但返回布尔值的函数可能是个例外 — 它可以采用 `是或否` 问题的形式，函数名也应该是驼峰式的。

```javascript
// Don't ❌
function toggle() {
  // ...
}

function agreed(user) {
  // ...
}

// Do ✅
function toggleThemeSwitcher() {
  // ...
}

function didAgreeToAllTerms(user) {
  // ...
}
```

### 使用默认参数

默认参数比 `&& ||` 或在函数体内使用额外的条件语句更干净。

```javascript
// Don't ❌
function printAllFilesInDirectory(dir) {
  const directory = dir || "./";
  //   ...
}

// Do ✅
function printAllFilesInDirectory(dir = "./") {
  // ...
}
```

### 限制参数的数量

尽管这条规则可能有争议，但函数最好是有3个以下参数。如果参数较多可能是以下两种情况之一：

- 该函数做的事情太多，应该拆分。
- 传递给函数的数据以某种方式相关，可以作为专用数据结构传递。

```javascript
// Don't ❌
function sendPushNotification(title, message, image, isSilent, delayMs) {
  // ...
}

sendPushNotification("New Message", "...", "http://...", false, 1000);

// Do ✅
function sendPushNotification({ title, message, image, isSilent, delayMs }) {
  // ...
}

const notificationConfig = {
  title: "New Message",
  message: "...",
  image: "http://...",
  isSilent: false,
  delayMs: 1000,
};

sendPushNotification(notificationConfig);
```

### 避免在一个函数中做太多事情

一个函数应该一次做一件事，这有助于减少函数的大小和复杂性，使测试、调试和重构更容易。

```javascript
// Don't ❌
function pingUsers(users) {
  users.forEach((user) => {
    const userRecord = database.lookup(user);
    if (!userRecord.isActive()) {
      ping(user);
    }
  });
}

// Do ✅
function pingInactiveUsers(users) {
  users.filter(!isUserActive).forEach(ping);
}

function isUserActive(user) {
  const userRecord = database.lookup(user);
  return userRecord.isActive();
}
```

### 避免使用布尔标志作为参数

函数含有布尔标志的参数意味这个函数是可以被简化的。

```javascript
// Don't ❌
function createFile(name, isPublic) {
  if (isPublic) {
    fs.create(`./public/${name}`);
  } else {
    fs.create(name);
  }
}

// Do ✅
function createFile(name) {
  fs.create(name);
}

function createPublicFile(name) {
  createFile(`./public/${name}`);
}
```

### 避免写重复的代码

如果你写了重复的代码，每次有逻辑改变，你都需要改动多个位置。

```javascript
// Don't ❌
function renderCarsList(cars) {
  cars.forEach((car) => {
    const price = car.getPrice();
    const make = car.getMake();
    const brand = car.getBrand();
    const nbOfDoors = car.getNbOfDoors();

    render({ price, make, brand, nbOfDoors });
  });
}

function renderMotorcyclesList(motorcycles) {
  motorcycles.forEach((motorcycle) => {
    const price = motorcycle.getPrice();
    const make = motorcycle.getMake();
    const brand = motorcycle.getBrand();
    const seatHeight = motorcycle.getSeatHeight();

    render({ price, make, brand, nbOfDoors });
  });
}

// Do ✅
function renderVehiclesList(vehicles) {
  vehicles.forEach((vehicle) => {
    const price = vehicle.getPrice();
    const make = vehicle.getMake();
    const brand = vehicle.getBrand();

    const data = { price, make, brand };

    switch (vehicle.type) {
      case "car":
        data.nbOfDoors = vehicle.getNbOfDoors();
        break;
      case "motorcycle":
        data.seatHeight = vehicle.getSeatHeight();
        break;
    }

    render(data);
  });
}
```

### 避免副作用

在 `JavaScript` 中，你应该更喜欢函数式模式而不是命令式模式。换句话说，大多数情况下我们都应该保持函数纯。副作用可能会修改共享状态和资源，从而导致一些奇怪的问题。所有的副作用都应该集中管理，例如你需要更改全局变量或修改文件，可以专门写一个 util 来做这件事。

```javascript
// Don't ❌
let date = "21-8-2021";

function splitIntoDayMonthYear() {
  date = date.split("-");
}

splitIntoDayMonthYear();

// Another function could be expecting date as a string
console.log(date); // ['21', '8', '2021'];

// Do ✅
function splitIntoDayMonthYear(date) {
  return date.split("-");
}

const date = "21-8-2021";
const newDate = splitIntoDayMonthYear(date);

// Original vlaue is intact
console.log(date); // '21-8-2021';
console.log(newDate); // ['21', '8', '2021'];
```

另外，如果你将一个可变值传递给函数，你应该直接克隆一个新值返回，而不是直接改变该它。

```javascript
// Don't ❌
function enrollStudentInCourse(course, student) {
  course.push({ student, enrollmentDate: Date.now() });
}

// Do ✅
function enrollStudentInCourse(course, student) {
  return [...course, { student, enrollmentDate: Date.now() }];
}
```

## 3. 条件语句

### 使用非负条件

```javascript
// Don't ❌
function isUserNotVerified(user) {
  // ...
}

if (!isUserNotVerified(user)) {
  // ...
}

// Do ✅
function isUserVerified(user) {
  // ...
}

if (isUserVerified(user)) {
  // ...
}
```

### 尽可能使用简写

```javascript
// Don't ❌
if (isActive === true) {
  // ...
}

if (firstName !== "" && firstName !== null && firstName !== undefined) {
  // ...
}

const isUserEligible = user.isVerified() && user.didSubscribe() ? true : false;

// Do ✅
if (isActive) {
  // ...
}

if (!!firstName) {
  // ...
}

const isUserEligible = user.isVerified() && user.didSubscribe();
```

### 避免过多分支

尽早 `return` 会使你的代码线性化、更具可读性且不那么复杂。

```javascript
// Don't ❌
function addUserService(db, user) {
  if (!db) {
    if (!db.isConnected()) {
      if (!user) {
        return db.insert("users", user);
      } else {
        throw new Error("No user");
      }
    } else {
      throw new Error("No database connection");
    }
  } else {
    throw new Error("No database");
  }
}

// Do ✅
function addUserService(db, user) {
  if (!db) throw new Error("No database");
  if (!db.isConnected()) throw new Error("No database connection");
  if (!user) throw new Error("No user");

  return db.insert("users", user);
}
```

### 优先使用 map 而不是 switch 语句

既能减少复杂度又能提升性能。

```javascript
// Don't ❌
const getColorByStatus = (status) => {
  switch (status) {
    case "success":
      return "green";
    case "failure":
      return "red";
    case "warning":
      return "yellow";
    case "loading":
    default:
      return "blue";
  }
};

// Do ✅
const statusColors = {
  success: "green",
  failure: "red",
  warning: "yellow",
  loading: "blue",
};

const getColorByStatus = (status) => statusColors[status] || "blue";
```

### 使用可选链接

```javascript
const user = {
  email: "JDoe@example.com",
  billing: {
    iban: "...",
    swift: "...",
    address: {
      street: "Some Street Name",
      state: "CA",
    },
  },
};

// Don't ❌
const email = (user && user.email) || "N/A";
const street =
  (user &&
    user.billing &&
    user.billing.address &&
    user.billing.address.street) ||
  "N/A";
const state =
  (user &&
    user.billing &&
    user.billing.address &&
    user.billing.address.state) ||
  "N/A";

// Do ✅
const email = user?.email ?? "N/A";
const street = user?.billing?.address?.street ?? "N/A";
const street = user?.billing?.address?.state ?? "N/A";
```

## 4.并发

### 避免回调

回调很混乱，会导致代码嵌套过深，使用 `Promise` 替代回调。

```javascript
// Don't ❌
getUser(function (err, user) {
  getProfile(user, function (err, profile) {
    getAccount(profile, function (err, account) {
      getReports(account, function (err, reports) {
        sendStatistics(reports, function (err) {
          console.error(err);
        });
      });
    });
  });
});

// Do ✅
getUser()
  .then(getProfile)
  .then(getAccount)
  .then(getReports)
  .then(sendStatistics)
  .catch((err) => console.error(err));

// or using Async/Await ✅✅

async function sendUserStatistics() {
  try {
    const user = await getUser();
    const profile = await getProfile(user);
    const account = await getAccount(profile);
    const reports = await getReports(account);
    return sendStatistics(reports);
  } catch (e) {
    console.error(err);
  }
}
```

## 5. 错误处理

### 处理抛出的错误和 reject 的 promise

```javascript
// Don't ❌
try {
  // Possible erronous code
} catch (e) {
  console.log(e);
}

// Do ✅
try {
  // Possible erronous code
} catch (e) {
  // Follow the most applicable (or all):
  // 1- More suitable than console.log
  console.error(e);

  // 2- Notify user if applicable
  alertUserOfError(e);

  // 3- Report to server
  reportErrorToServer(e);

  // 4- Use a custom error handler
  throw new CustomError(e);
}
```

## 6.注释

### 只注释业务逻辑

可读的代码使你免于过度注释，因此，你应该只注释复杂的逻辑。

```javascript
// Don't ❌
function generateHash(str) {
  // Hash variable
  let hash = 0;

  // Get the length of the string
  let length = str.length;

  // If the string is empty return
  if (!length) {
    return hash;
  }

  // Loop through every character in the string
  for (let i = 0; i < length; i++) {
    // Get character code.
    const char = str.charCodeAt(i);

    // Make the hash
    hash = (hash << 5) - hash + char;

    // Convert to 32-bit integer
    hash &= hash;
  }
}

// Do ✅
function generateHash(str) {
  let hash = 0;
  let length = str.length;
  if (!length) {
    return hash;
  }

  for (let i = 0; i < length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return hash;
}
```

### 使用版本控制

在代码里不需要保留历史版本的注释，想查的话你直接用 `git log` 就可以搜到。

```javascript
// Don't ❌
/**
 * 2021-7-21: Fixed corner case
 * 2021-7-15: Improved performance
 * 2021-7-10: Handled mutliple user types
 */
function generateCanonicalLink(user) {
  // const session = getUserSession(user)
  const session = user.getSession();
  // ...
}

// Do ✅
function generateCanonicalLink(user) {
  const session = user.getSession();
  // ...
}
```
