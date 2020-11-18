initSidebarItems({"enum":[["CanDo","Features which are optionally supported by a plugin. These are queried by the host at run time."],["Category","Plugin type. Generally either Effect or Synth."]],"struct":[["HostCallback","A reference to the host which allows the plugin to call back and access information."],["Info","A structure representing static plugin information."]],"trait":[["Plugin","Must be implemented by all VST plugins."],["PluginParameters","Parameter object shared between the UI and processing threads. Since access is shared, all methods take `self` by immutable reference. All mutation must thus be performed using thread-safe interior mutability."]]});