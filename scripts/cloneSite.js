import fs from "fs-extra";
import path from "path";
import { exec } from "child_process";

const templatePath = path.resolve("./site-template");
const targetFolder = process.argv[2]; // имя новой папки

if (!targetFolder) {
  console.error("❌ Укажи имя новой папки. Пример: npm run clone my-client");
  process.exit(1);
}

const targetPath = path.resolve(`./${targetFolder}`);

async function cloneSite() {
  try {
    if (!fs.existsSync(templatePath)) {
      console.error("❌ Шаблон не найден:", templatePath);
      process.exit(1);
    }

    if (fs.existsSync(targetPath)) {
      console.error("❌ Папка уже существует:", targetPath);
      process.exit(1);
    }

    console.log(`📦 Копируем шаблон в "${targetFolder}"...`);
    await fs.copy(templatePath, targetPath);

    // Меняем siteTitle в siteData.json
    const dataFile = path.join(targetPath, "data", "siteData.json");
    if (fs.existsSync(dataFile)) {
      const data = await fs.readJson(dataFile);
      data.siteTitle = `${targetFolder} website`;
      await fs.writeJson(dataFile, data, { spaces: 2 });
      console.log("📝 siteData.json обновлён");
    }

    // Переходим в новую папку и устанавливаем зависимости
    console.log("⚙️ Устанавливаем зависимости...");
    exec(`cd "${targetPath}" && yarn install`, (err, stdout, stderr) => {
      if (err) {
        console.error("❌ Ошибка установки зависимостей:", err.message);
        return;
      }
      console.log(stdout);
      console.log("✅ Зависимости установлены");

      // Открываем VS Code в новой папке
      exec(`code "${targetPath}"`, (error) => {
        if (error) {
          console.error(
            "⚠️ Не удалось открыть VS Code автоматически:",
            error.message
          );
        } else {
          console.log(`🟢 VS Code открыт в "${targetFolder}"`);
        }
      });
    });
  } catch (err) {
    console.error("❌ Ошибка клонирования:", err);
  }
}

cloneSite();
