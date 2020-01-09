/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package managedBean;

import java.io.Serializable;
import javax.annotation.PostConstruct;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.SessionScoped;
import org.primefaces.component.menuitem.MenuItem;
import org.primefaces.component.submenu.Submenu;
import org.primefaces.model.DefaultMenuModel;
import org.primefaces.model.MenuModel;

/**
 *
 * @author Ricky
 */
@ManagedBean(name = "ManagedMenu")
@SessionScoped
public class ManagedMenu implements Serializable {
    
    private MenuModel menuModel;
    private MenuItem nameItem;
    private String nombre;
    
    public ManagedMenu() {
        menuModel = crearMenu();
    }
    
    private MenuModel crearMenu() {
        MenuModel model = new DefaultMenuModel();
        
        Submenu fileSubmenu = new Submenu();
        fileSubmenu.setLabel("Archivo");
        
        Submenu newSubmenu = new Submenu();
        newSubmenu.setLabel("Nuevo");
        
        MenuItem projectItem = new MenuItem();
        projectItem.setValue("Proyecto");
        projectItem.setUrl("#");
        newSubmenu.getChildren().add(projectItem);
        
        MenuItem otherItem = new MenuItem();
        otherItem.setValue("Otro");
        otherItem.setUrl("#");
        newSubmenu.getChildren().add(otherItem);
        
        fileSubmenu.getChildren().add(newSubmenu);
        
        MenuItem openItem = new MenuItem();
        openItem.setValue("Abrir");
        openItem.setUrl("#");
        fileSubmenu.getChildren().add(openItem);
        
        MenuItem exitItem = new MenuItem();
        exitItem.setValue("Salir");
        exitItem.setUrl("#");
        fileSubmenu.getChildren().add(exitItem);
        
        model.addSubmenu(fileSubmenu);
        
        Submenu editSubmenu = new Submenu();
        editSubmenu.setLabel("Editar");
        
        MenuItem undoItem = new MenuItem();
        undoItem.setValue("Deshacer");
        undoItem.setUrl("#");
        editSubmenu.getChildren().add(undoItem);
        
        MenuItem redoItem = new MenuItem();
        redoItem.setValue("Rehacer");
        redoItem.setUrl("#");
        editSubmenu.getChildren().add(redoItem);
        
        model.addSubmenu(editSubmenu);
        
        Submenu helpSubmenu = new Submenu();
        helpSubmenu.setLabel("Ayuda");
        
        MenuItem contentItem = new MenuItem();
        contentItem.setValue("Contenidos");
        contentItem.setUrl("#");
        helpSubmenu.getChildren().add(contentItem);
        
        Submenu searchSubmenu = new Submenu();
        searchSubmenu.setLabel("Buscar");
        
        Submenu textSubmenu = new Submenu();
        textSubmenu.setLabel("Texto");
        
        MenuItem wokspaceItem = new MenuItem();
        wokspaceItem.setValue("Espacio de trabajo");
        wokspaceItem.setUrl("#");
        textSubmenu.getChildren().add(wokspaceItem);
        searchSubmenu.getChildren().add(textSubmenu);
        
        MenuItem fileItem = new MenuItem();
        fileItem.setValue("Archivo");
        fileItem.setUrl("#");
        searchSubmenu.getChildren().add(fileItem);
        
        helpSubmenu.getChildren().add(searchSubmenu);
        model.addSubmenu(helpSubmenu);
        
        nameItem = new MenuItem();
        nameItem.setValue(nombre == null ? "No ha iniciado sesión" : nombre);
        nameItem.setUrl("#");
        model.addMenuItem(nameItem);
        
        return model;
    }
    
    @PostConstruct
    private void inicio() {
    }
    
    public void guardar() {
        nameItem.setValue(nombre);
    }
    
    public MenuModel getMenuModel() {
        return menuModel;
    }
    
    public String getNombre() {
        return nombre;
    }
    
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
}
