# Этап сборки
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /app

# Копируем всё из текущей папки (где уже лежит .csproj и Program.cs и т.д.)
COPY . .

# Восстанавливаем зависимости и публикуем
RUN dotnet restore
RUN dotnet publish -c Release -o /app/publish

# Этап выполнения
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS runtime
WORKDIR /app
COPY --from=build /app/publish .
ENTRYPOINT ["dotnet", "Online-Store.API.dll"]
