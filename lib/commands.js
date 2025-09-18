// Función para generar automáticamente el array de comandos desde los plugins
function generateCommands() {
  let commands = [];
  
  // Recorrer todos los plugins cargados
  for (let plugin of Object.values(global.plugins)) {
    if (!plugin.help || !plugin.tags || !plugin.command) continue;
    
    // Para cada comando en help
    for (let commandName of plugin.help) {
      let commandObj = {
        name: commandName,
        desc: plugin.desc || `Comando ${commandName}`,
        alias: plugin.command.map(cmd => `/${cmd}`),
        category: plugin.tags[0] || 'otros',
        uso: plugin.usage || "_sin parámetros_"
      };
      
      commands.push(commandObj);
    }
  }
  
  return commands;
}

// Generar el array de comandos automáticamente
export const commands = generateCommands();
